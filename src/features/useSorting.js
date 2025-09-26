/**
 * @file useSorting.js
 * @description Sorts the children of listElement using the linked <select>.
 */

import { getElementByAttr } from '../utils/attr.js'

/**
 * Sorts an array of children based on the selected mode.
 *
 * @param {HTMLElement[]} children - Original children to sort.
 * @param {string} mode - Sorting mode: 'A→Z', 'Z→A', or 'Default'.
 * @param {HTMLElement[]} originalOrder - Original order of children for resetting.
 * @returns {HTMLElement[]} Sorted array of children.
 */
function sortChildrenByMode(children, mode, originalOrder) {
  switch (mode) {
    case 'A→Z':
      return [...children].sort((a, b) => a.textContent.localeCompare(b.textContent))
    case 'Z→A':
      return [...children].sort((a, b) => b.textContent.localeCompare(a.textContent))
    default:
      return [...originalOrder]
  }
}

/**
 * Sets up table column sorting for a specific <th> element.
 *
 * @param {HTMLElement} listElement - Table body (<tbody>) containing rows.
 * @param {HTMLElement} th - Table header (<th>) element to attach click sorting.
 * @param {number} colIndex - Column index for sorting.
 */
function sortTableColumn(listElement, th, colIndex) {
  const ths = th.parentElement.querySelectorAll('th')

  th.addEventListener('click', () => {
    const rows = Array.from(listElement.children)
    const isAsc = th.classList.contains('asc')

    // Reset classes on all headers
    ths.forEach((header) => header.classList.remove('asc', 'desc'))

    // Toggle ascending/descending classes
    th.classList.toggle('asc', !isAsc)
    th.classList.toggle('desc', isAsc)

    // Sort rows based on column
    rows.sort((a, b) => {
      const aText = a.children[colIndex].textContent
      const bText = b.children[colIndex].textContent
      return isAsc ? bText.localeCompare(aText) : aText.localeCompare(bText)
    })

    // Append sorted rows back into tbody
    rows.forEach((row) => listElement.appendChild(row))
  })
}

/**
 * Enables sorting for a list element via a <select> or table column headers.
 *
 * @param {HTMLElement} listElement - The container element whose children will be sorted.
 */
export function useSorting(listElement) {
  const selectEl = getElementByAttr(listElement, 'sortby')
  const isTable = listElement.tagName === 'TBODY'

  // <select>-based sorting
  if (selectEl) {
    const children = Array.from(listElement.children)
    const originalOrder = [...children]

    function sortItems() {
      const sorted = sortChildrenByMode(children, selectEl.value, originalOrder)
      sorted.forEach((child) => listElement.appendChild(child))
    }

    selectEl.addEventListener('change', sortItems)
    sortItems()
  }

  // Table column sorting
  if (isTable) {
    const ths = listElement.previousElementSibling.querySelectorAll('th')
    ths.forEach((th, colIndex) => sortTableColumn(listElement, th, colIndex))
  }
}
