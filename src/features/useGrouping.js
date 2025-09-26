/**
 * @file useGrouping.js
 * @description  Groups the children of listElement using the linked <select>.
 */

import { getElementByAttr } from '../utils/attr.js'

/**
 * Generates HTML options for a select element based on groups.
 *
 * @param {string[]} groups - Array of unique group names.
 * @param {boolean} multiple - Whether the select allows multiple selection.
 * @returns {string} HTML string for select options.
 */
function createGroupOptions(groups, multiple) {
  const options = [
    '<option value="All">All</option>',
    ...groups.map((g) => `<option value="${g}">${g}</option>`)
  ]

  return options.join('')
}

/**
 * Shows/hides children based on selected groups.
 *
 * @param {HTMLElement[]} children - List of elements to filter.
 * @param {string[]} selectedGroups - Selected group values.
 */
function filterChildrenByGroup(children, selectedGroups) {
  children.forEach((child) => {
    const group = child.getAttribute('group') ?? ''

    child.style.display =
      selectedGroups.includes('All') || selectedGroups.includes(group) ? '' : 'none'
  })
}

/**
 * Sets up grouping for a list element based on a <select> element.
 * The select element is identified via the `groupby` attribute on the listElement.
 *
 * @param {HTMLElement} listElement - The container element whose children will be grouped.
 */
export function useGrouping(listElement) {
  const selectEl = getElementByAttr(listElement, 'groupby')
  if (!selectEl) return // Exit early if no linked select is found

  const children = Array.from(listElement.children)
  const groups = Array.from(new Set(children.map((c) => c.getAttribute('group') ?? '')))

  // Populate the select element with options
  selectEl.innerHTML = createGroupOptions(groups, selectEl.multiple)

  // If multiple selection, default "All" to selected
  if (selectEl.multiple) {
    Array.from(selectEl.options).forEach((opt) => {
      if (opt.value === 'All') opt.selected = true
    })
  }

  /**
   * Handles select change and updates displayed children
   */
  function onChange() {
    const selected = Array.from(selectEl.selectedOptions).map((o) => o.value)
    filterChildrenByGroup(children, selected)
  }

  selectEl.addEventListener('change', onChange)

  // Apply initial grouping
  onChange()
}
