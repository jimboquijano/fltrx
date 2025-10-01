/**
 * @file core/funnel.js
 * @description Core functionality to trim down the list of elements.
 */

import { getElementByAttr, getAttr } from '../utils/attr'
import { getChildrenCache } from '../utils/misc'

/**
 * Starts running each trimmer for grouping, sorting and filtering.
 *
 * @param {HTMLElement} listEl
 * @param {HTMLElement} th
 * @returns {HTMLElement[]}
 */
export function startFunnel(listEl, th) {
  const snapshoptChildren = getChildrenCache(listEl)
  let children = Array.from(snapshoptChildren)

  // Trim the list through grouping
  if (listEl.hasAttribute('groupby')) {
    const selectEl = getElementByAttr(listEl, 'groupby')
    const selected = Array.from(selectEl.selectedOptions).map((o) => o.value)
    children = startGrouping(children, selected)
  }

  // Trim the list through sorting
  if (listEl.hasAttribute('sortby')) {
    const selectEl = getElementByAttr(listEl, 'sortby')
    const isTable = listEl.tagName === 'TBODY'

    if (selectEl) {
      children = startSorting(children, selectEl.value)
    }

    if (isTable && th) {
      const mode = th.classList.contains('desc') ? 'desc' : 'asc'
      children = startSorting(children, mode, th)
    }
  }

  // Trim the list through filtering
  if (listEl.hasAttribute('filter')) {
    const inputEl = getElementByAttr(listEl, 'filter')
    const mode = getAttr(listEl, 'filter-mode', 'default')
    children = startFilter(children, inputEl.value, mode)
  }

  return children
}

/**
 * Trim down the list of elements through filtering.
 *
 * @param {HTMLElement[]} children
 * @param {string} query
 * @param {string} mode
 * @returns {HTMLElement[]}
 */
export function startFilter(children, query, mode) {
  children = children.filter((child) => {
    const { match } = matchText(child.textContent, query, mode)
    return match
  })

  return children
}

/**
 * Trim down the list of elements through grouping.
 *
 * @param {HTMLElement[]} children
 * @param {string[]} selected
 * @returns {HTMLElement[]}
 */
export function startGrouping(children, selected) {
  children = children.filter((child) => {
    const group = child.getAttribute('group') ?? ''
    return selected.includes('All') || selected.includes(group)
  })

  return children
}

/**
 * Trim down the list of elements through sorting.
 *
 * Supported modes:
 * - 'asc' / 'desc' → Alphabetical A–Z / Z–A
 * - 'num-asc' / 'num-desc' → Numeric ascending / descending
 * - 'date-asc' / 'date-desc' → Date oldest → newest / newest → oldest
 * - 'len-asc' / 'len-desc' → By string length shortest → longest / longest → shortest
 * - 'shuffle' → Random order
 *
 * @param {HTMLElement[]} children
 * @param {string} mode
 * @param {HTMLElement} [th]
 * @returns {HTMLElement[]}
 */
export function startSorting(children, mode, th) {
  function content(el) {
    return th ? el.children[th.cellIndex].textContent.trim() : el.textContent.trim()
  }

  switch (mode) {
    case 'asc':
      children = children.sort((a, b) => content(a).localeCompare(content(b)))
      break
    case 'desc':
      children = children.sort((a, b) => content(b).localeCompare(content(a)))
      break
    case 'num-asc':
      children = children.sort((a, b) => Number(content(a)) - Number(content(b)))
      break
    case 'num-desc':
      children = children.sort((a, b) => Number(content(b)) - Number(content(a)))
      break
    case 'date-asc':
      children = children.sort((a, b) => new Date(content(a)) - new Date(content(b)))
      break
    case 'date-desc':
      children = children.sort((a, b) => new Date(content(b)) - new Date(content(a)))
      break
    case 'len-asc':
      children = children.sort((a, b) => content(a).length - content(b).length)
      break
    case 'len-desc':
      children = children.sort((a, b) => content(b).length - content(a).length)
      break
    case 'shuffle':
      children = children.sort(() => Math.random() - 0.5)
      break
  }

  return children
}

/**
 * Matches text against a query in default, regex, or fuzzy mode.
 *
 * @param {string} text
 * @param {string} query
 * @param {string} mode
 * @returns {{match: boolean, indices: number[]}}
 */
export function matchText(text, query, mode = 'default') {
  if (!query) return { match: true, indices: [] }

  switch (mode) {
    case 'regex':
      try {
        const regex = new RegExp(query, 'i')
        return { match: regex.test(text), indices: [] }
      } catch {
        return { match: false, indices: [] }
      }
    case 'fuzzy': {
      const indices = getFuzzyMatchIndices(text, query)
      return { match: indices.length > 0, indices }
    }
    default:
      return {
        match: text.toLowerCase().includes(query.toLowerCase()),
        indices: []
      }
  }
}

/**
 * Retrieves the indices of fuzzy matches between text and pattern.
 *
 * @param {string} text
 * @param {string} pattern
 * @returns {number[]}
 */
export function getFuzzyMatchIndices(text, pattern) {
  const indices = []
  let lastIndex = 0

  for (const c of pattern) {
    const i = text.toLowerCase().indexOf(c.toLowerCase(), lastIndex)
    if (i === -1) return []

    indices.push(i)
    lastIndex = i + 1
  }

  return indices
}
