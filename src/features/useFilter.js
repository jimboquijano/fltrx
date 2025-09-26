/**
 * @file useFilter.js
 * @description Filters the children of listElement using the linked <input>.
 */

import { getElementByAttr, getAttr } from '../utils/attr.js'
import { debounce } from '../utils/timing.js'
import { replaceChildren } from '../utils/dom.js'
import { matchText } from '../utils/match.js'

/**
 * Returns the filtered children of a list based on a query and mode.
 *
 * @param {HTMLElement[]} children - Original children to filter.
 * @param {string} query - Input query string.
 * @param {string} mode - Matching mode (passed to matchText).
 * @returns {HTMLElement[]} Filtered list of elements that match the query.
 */
function filterChildren(children, query, mode) {
  return children.filter((child) => {
    const { match } = matchText(child.textContent, query, mode)
    return match
  })
}

/**
 * Sets up a live filter for a list element using an associated input element.
 * The input element is identified by the `filter` attribute on the listElement.
 *
 * @param {HTMLElement} listElement - The container element whose children will be filtered.
 */
export function useFilter(listElement) {
  const inputEl = getElementByAttr(listElement, 'filter')
  if (!inputEl) return // Exit early if no linked input is found

  // Preserve original children to maintain content and attached events
  const originalChildren = Array.from(listElement.children)
  const mode = getAttr(listElement, 'filter-mode', 'default')

  /**
   * Filters original children and updates the list element.
   */
  function filterItems() {
    const query = inputEl.value
    const matched = filterChildren(originalChildren, query, mode)
    replaceChildren(listElement, matched)
  }

  // Listen to input changes and apply filtering
  const debouncedFilter = debounce(filterItems, 150)
  inputEl.addEventListener('input', debouncedFilter)

  // Apply initial filter in case input has pre-filled value
  filterItems()
}
