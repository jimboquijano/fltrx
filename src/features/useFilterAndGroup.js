/**
 * @file useFilterAndGroup.js
 * @description Combines filtering by text input and grouping by select element
 * for a listElement. This unifies useFilter.js + useGrouping.js so you always
 * filter inside the currently selected group(s).
 */

import { getElementByAttr, getAttr } from '../utils/attr.js'
import { debounce } from '../utils/timing.js'
import { replaceChildren } from '../utils/dom.js'
import { matchText } from '../utils/match.js'

/**
 * Generates HTML options for a select element based on groups.
 *
 * @param {string[]} groups - Array of unique group names.
 * @returns {string} HTML string for select options.
 */
function createGroupOptions(groups) {
  const options = [
    '<option value="All">All</option>',
    ...groups.map((g) => `<option value="${g}">${g}</option>`)
  ]
  return options.join('')
}

/**
 * Filter a list of elements by group.
 *
 * @param {HTMLElement[]} children - The original list of elements.
 * @param {string[]} selectedGroups - Selected group values.
 * @returns {HTMLElement[]} Group-filtered elements.
 */
function filterChildrenByGroup(children, selectedGroups) {
  return children.filter((child) => {
    const group = child.getAttribute('group') ?? ''
    return selectedGroups.includes('All') || selectedGroups.includes(group)
  })
}

/**
 * Filter a list of elements by text query.
 *
 * @param {HTMLElement[]} children - Children already filtered by group.
 * @param {string} query - Input query string.
 * @param {string} mode - Matching mode (passed to matchText).
 * @returns {HTMLElement[]} Filtered list of elements that match the query.
 */
function filterChildrenByText(children, query, mode) {
  return children.filter((child) => {
    const { match } = matchText(child.textContent, query, mode)
    return match
  })
}

/**
 * Sets up combined filtering + grouping for a list element.
 *
 * @param {HTMLElement} listElement - The container element whose children will be filtered & grouped.
 */
export function useFilterAndGroup(listElement) {
  // Find linked <input> for text filter
  const inputEl = getElementByAttr(listElement, 'filter')

  // Find linked <select> for grouping
  const selectEl = getElementByAttr(listElement, 'groupby')
  if (!inputEl && !selectEl) return // Exit early if no linked input or select found

  // Preserve original children (stable references)
  const originalChildren = Array.from(listElement.children)
  const mode = getAttr(listElement, 'filter-mode', 'default')

  // Setup group select
  let groups = []
  if (selectEl) {
    groups = Array.from(new Set(originalChildren.map((c) => c.getAttribute('group') ?? '')))
    selectEl.innerHTML = createGroupOptions(groups)

    // If multiple selection, default "All" to selected
    if (selectEl.multiple) {
      Array.from(selectEl.options).forEach((opt) => {
        if (opt.value === 'All') opt.selected = true
      })
    }
  }

  /**
   * Core function: applies group + text filters and updates the DOM.
   */
  function applyFilters() {
    // Collect selected groups
    let selectedGroups = ['All']

    if (selectEl) {
      selectedGroups = Array.from(selectEl.selectedOptions).map((o) => o.value)
    }

    // Apply group filter
    let filtered = filterChildrenByGroup(originalChildren, selectedGroups)

    // Apply text filter
    const query = inputEl ? inputEl.value : ''
    filtered = filterChildrenByText(filtered, query, mode)

    // Update DOM once
    replaceChildren(listElement, filtered)
  }

  // Event listeners
  if (inputEl) {
    // Debounced to reduce reflows on fast typing
    const debouncedFilter = debounce(applyFilters, 150)
    inputEl.addEventListener('input', debouncedFilter)
  }

  if (selectEl) {
    selectEl.addEventListener('change', applyFilters)
  }

  // Initial filter on load
  applyFilters()
}
