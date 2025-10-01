/**
 * @file utils/misc.js
 * @description Low-level misc utilities for Fltrx.
 */

const childrenCache = new WeakMap()

/**
 * Creates a snapshopt of a list of children element.
 *
 * @param {HTMLElement} listEl
 * @returns {HTMLElement}
 */
export function getChildrenCache(listEl) {
  if (!childrenCache.has(listEl)) {
    childrenCache.set(listEl, Array.from(listEl.children))
  }

  return childrenCache.get(listEl)
}

/**
 * Refreshes the snapshopt of a list of children element.
 *
 * @param {HTMLElement} fn
 */
export function refreshChildrenCache(listEl) {
  childrenCache.set(listEl, Array.from(listEl.children))
}

/**
 * Simple debounce utility to limit how often a function runs.
 *
 * @param {function} fn
 * @param {number} delay
 * @returns {function}
 */
export function debounce(fn, delay = 150) {
  let timeout

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Temporarily disconnect observer while performing updates.
 *
 * @param {MutationObserver} observer
 * @param {HTMLElement} container
 * @param {function} fn
 */
export function safeObserveUpdate(observer, container, fn) {
  observer.disconnect()
  fn()
  observer.observe(container, { childList: true })
}

/**
 * Escape plain text for safe insertion into HTML.
 * Prevents XSS and malformed HTML.
 *
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
 * Clamp a number between min and max.
 *
 * @param {number} num
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clampNumber(num, min, max) {
  return Math.min(Math.max(num, min), max)
}
