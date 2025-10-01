/**
 * @file features/useSorting.js
 * @description Sorts the children of list element using a linked <select>.
 */

import { startFunnel } from '../core/funnel'
import { getElementByAttr } from '../utils/attr'
import { replaceChildren } from '../utils/dom'
import { toggleEmptyState } from './useFilter'

/**
 * Enables sorting for a list element via a <select> or table column headers.
 *
 * @param {HTMLElement} listEl - The list element whose children will be sorted.
 */
export function useSorting(listEl) {
  const selectEl = getElementByAttr(listEl, 'sortby')
  const isTable = listEl.tagName === 'TBODY'

  function sortItems(th) {
    const children = startFunnel(listEl, th)
    replaceChildren(listEl, children)
    toggleEmptyState(listEl, children.length)
  }

  // <select>-based sorting
  if (selectEl) {
    selectEl.addEventListener('change', sortItems)

    // Apply initial sorting
    if (selectEl.value != 'Default') {
      sortItems()
    }
  }

  // Table column sorting
  if (isTable) {
    const ths = listEl.previousElementSibling.querySelectorAll('th')

    ths.forEach((th) => {
      th.addEventListener('click', () => {
        toggleSort(ths, th)
        sortItems(th)
      })

      // Apply initial sorting
      if (th.classList.contains('asc', 'desc')) {
        sortItems(th)
      }
    })
  }
}

/**
 * Triggers sorting when a column is clicked.
 */
function toggleSort(ths, th) {
  ths.forEach((th_) => {
    if (th != th_) th_.classList.remove('asc', 'desc')
  })

  const hasAsc = th.classList.contains('asc')
  const hasDesc = th.classList.contains('desc')

  if (!hasAsc && !hasDesc) {
    th.classList.add('asc')
    return
  }

  if (hasAsc) {
    th.classList.toggle('asc')
    th.classList.toggle('desc')
  }

  if (hasDesc) {
    th.classList.toggle('desc')
    th.classList.toggle('asc')
  }
}
