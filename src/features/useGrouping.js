/**
 * @file features/useGrouping.js
 * @description  Groups the children of list element using a linked <select>.
 */

import { startFunnel } from '../core/funnel'
import { getElementByAttr } from '../utils/attr'
import { replaceChildren } from '../utils/dom'
import { toggleEmptyState } from './useFilter'

/**
 * Sets up grouping for a list element based on a <select> element.
 * The select element is identified via the `groupby` attribute on the list element.
 *
 * @param {HTMLElement} listEl
 */
export function useGrouping(listEl) {
  const selectEl = getElementByAttr(listEl, 'groupby')
  if (!selectEl) return

  const origChildren = Array.from(listEl.children)
  const groups = getGroupNames(origChildren)

  // Populate the select element with options
  selectEl.innerHTML = createGroupOptions(groups)

  /**
   * Display the selected groups on select change.
   */
  function groupItems() {
    const children = startFunnel(listEl)
    replaceChildren(listEl, children)
    toggleEmptyState(listEl, children.length)
  }

  selectEl.addEventListener('change', groupItems)

  // Apply initial grouping
  if (selectEl.value != 'All') {
    groupItems()
  }
}

/**
 * Generates HTML options for a select element based on groups.
 *
 * @param {string[]} groups
 * @returns {string}
 */
function createGroupOptions(groups) {
  const options = [
    '<option value="All" selected>All</option>',
    ...groups.map((g) => `<option value="${g}">${g}</option>`)
  ]

  return options.join('')
}

/**
 * Returns the group names of a children elements.
 *
 * @param {HTMLElement[]} children
 * @returns {string[]}
 */
function getGroupNames(children) {
  let groupNames = []
  groupNames = Array.from(new Set(children.map((c) => c.getAttribute('group') ?? '')))

  return groupNames
}
