/**
 * @file features/useFilter.js
 * @description Filters the children of list element using a linked <input>.
 */

import { startFunnel } from '../core/funnel'
import { showHighlight } from '../core/highlight'
import { getElementByAttr } from '../utils/attr'
import { replaceChildren } from '../utils/dom'
import { debounce } from '../utils/misc'

/**
 * Sets up a live filter for a list element using an associated input element.
 * The input element is identified by the `filter` attribute on the listEl.
 *
 * @param {HTMLElement} listEl
 */
export function useFilter(listEl) {
  const inputEl = getElementByAttr(listEl, 'filter')
  if (!inputEl) return

  toggleEmptyState(listEl, 1)

  /**
   * Filters original children and updates the list element.
   */
  function filterItems() {
    const children = startFunnel(listEl)
    replaceChildren(listEl, children)
    showHighlight(listEl, children)
    toggleEmptyState(listEl, children.length)
  }

  // Listen to input changes and apply filtering
  const debouncedFilter = debounce(filterItems, 150)
  inputEl.addEventListener('input', debouncedFilter)

  // Apply initial filter in case input has pre-filled value
  if (inputEl.value) {
    filterItems()
  }
}

/**
 * Show or hide a "no results" element linked via `filter-empty`.
 *
 * @param {HTMLElement} listEl
 * @param {number} matchCount
 */
export function toggleEmptyState(listEl, matchCount) {
  const emptyId = listEl.getAttribute('filter-empty')
  if (!emptyId) return

  const emptyEl = document.getElementById(emptyId)
  if (!emptyEl) return

  if (matchCount === 0) {
    emptyEl.style.display = ''
  } else {
    emptyEl.style.display = 'none'
  }
}
