/**
 * @file utils/highlight.js
 * @description Low-level highlighting utilities for Fltrx.
 */

import { matchText } from './match.js'

/**
 * Escape plain text for safe insertion into HTML.
 * Prevents XSS and malformed HTML.
 * @param {string} str
 * @returns {string}
 */
export function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Compute mask for fuzzy mode.
 * Marks only the specific indices returned by matchText.
 *
 * @param {string} fullText
 * @param {string} query
 * @returns {Uint8Array}
 */
function computeFuzzyMask(fullText, query) {
  const n = fullText.length
  const mask = new Uint8Array(n)
  const { match, indices } = matchText(fullText, query, 'fuzzy')
  if (!match) return mask

  for (const idx of indices) {
    if (idx >= 0 && idx < n) mask[idx] = 1
  }

  return mask
}

/**
 * Compute mask for regex or default mode.
 * This covers exact substring matches and custom regex patterns.
 *
 * @param {string} fullText
 * @param {string} query
 * @param {string} mode
 * @returns {Uint8Array}
 */
function computeRegexMask(fullText, query, mode) {
  const n = fullText.length
  const mask = new Uint8Array(n)
  let re

  try {
    if (mode === 'regex') {
      re = new RegExp(query, 'gi')
    } else {
      // default mode: escape special characters to treat as literal string
      const esc = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      re = new RegExp(esc, 'gi')
    }
  } catch (e) {
    // invalid regex — return empty mask
    return mask
  }

  let m

  while ((m = re.exec(fullText)) !== null) {
    const start = m.index
    const end = start + (m[0] ? m[0].length : 0)

    for (let i = start; i < end; i++) {
      if (i >= 0 && i < n) mask[i] = 1
    }

    // avoid infinite loop for zero-length matches
    if (m.index === re.lastIndex) re.lastIndex++
  }

  return mask
}

let lastQuery = ''
let lastMode = ''
let lastFullText = ''
let lastMask = null

/**
 * Compute a boolean array of length = fullText.length where true means character should be highlighted.
 * This orchestrates fuzzy vs regex vs default modes with caching.
 *
 * @param {string} fullText
 * @param {string} query
 * @param {string} mode
 * @returns {Uint8Array} array of 0/1 flags
 */
export function computeHighlightMask(fullText, query, mode) {
  // If same inputs as last time, return cached mask
  if (fullText === lastFullText && query === lastQuery && mode === lastMode && lastMask) {
    return lastMask
  }

  // Otherwise compute fresh mask
  let mask

  if (!query) {
    mask = new Uint8Array(fullText.length)
  } else if (mode === 'fuzzy') {
    mask = computeFuzzyMask(fullText, query)
  } else {
    mask = computeRegexMask(fullText, query, mode)
  }

  // Store cache
  lastFullText = fullText
  lastQuery = query
  lastMode = mode
  lastMask = mask

  return mask
}

/**
 * Unwrap existing <mark> elements inside a container to plain text nodes.
 * This prevents nested marks when re-highlighting multiple times.
 *
 * @param {HTMLElement} container
 */
export function removeExistingMarks(container) {
  const existingMarks = container.querySelectorAll('mark')

  existingMarks.forEach((m) => {
    m.replaceWith(document.createTextNode(m.textContent))
  })
}

/**
 * Build highlighted HTML for a single text node using global offset + mask.
 * This helper is called by buildTextNodeReplacements for each text node.
 *
 * @param {Text} node
 * @param {Uint8Array} mask
 * @param {number} offset
 * @returns {{html: string, len: number, needsReplace: boolean}}
 */
function buildSingleNodeHTML(node, mask, offset) {
  const txt = node.nodeValue || ''
  const len = txt.length
  let buf = ''
  let needsReplace = false

  for (let i = 0; i < len; i++) {
    const globalIdx = offset + i
    const ch = txt[i]

    if (mask[globalIdx]) {
      needsReplace = true
      buf += '<mark>' + escapeHtml(ch) + '</mark>'
    } else {
      buf += escapeHtml(ch)
    }
  }

  return { html: buf, len, needsReplace }
}

/**
 * Walk text nodes and compute replacement HTML segments for nodes that contain highlighted chars.
 * Returns an array of { node, html } to be applied after walking (so we don't disturb the TreeWalker).
 *
 * This is the main worker that applies the mask to an entire container’s text nodes.
 *
 * @param {HTMLElement} container
 * @param {Uint8Array} mask
 * @returns {Array<{node: Text, html: string}>}
 */
export function buildTextNodeReplacements(container, mask) {
  const nodesToReplace = []
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false)
  let offset = 0

  while (walker.nextNode()) {
    const node = walker.currentNode
    const txt = node.nodeValue || ''
    const len = txt.length

    if (len === 0) {
      // advance offset even for empty text nodes
      offset += 0
      continue
    }

    // Build HTML for this text node using mask at global positions [offset .. offset+len-1]
    const { html, len: usedLen, needsReplace } = buildSingleNodeHTML(node, mask, offset)

    if (needsReplace) {
      nodesToReplace.push({ node, html })
    }

    offset += usedLen
  }

  return nodesToReplace
}

/**
 * Apply replacements for text nodes (replace each text node with the HTML fragment).
 *
 * @param {Array<{node: Text, html: string}>} replacements
 */
export function applyReplacements(replacements) {
  for (const { node, html } of replacements) {
    const wrapper = document.createElement('span')
    wrapper.innerHTML = html

    const frag = document.createDocumentFragment()
    while (wrapper.firstChild) frag.appendChild(wrapper.firstChild)
    node.parentNode.replaceChild(frag, node)
  }
}
