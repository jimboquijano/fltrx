/**
 * @file features/usePagination.js
 * @description Paginates the children of listElement using the linked pagination controls.
 */

import { getElementByAttr } from '../utils/attr.js'
import { replaceChildren } from '../utils/dom.js'
import { safeObserveUpdate } from '../utils/observer.js'
import { createPaginationItem, paginateItems, getPageRange, clamp } from '../utils/pagination.js'

/**
 * Builds an array of pagination <li> elements for the given state.
 *
 * @param {number} currentPage - Current page number.
 * @param {number} totalPages - Total number of pages.
 * @param {function} goto - Callback to navigate to a page.
 * @returns {HTMLElement[]} Array of <li> elements representing pagination controls.
 */
function buildPaginationItems(currentPage, totalPages, goto) {
  const items = []

  const addItem = (label, page, opts = {}) =>
    items.push(createPaginationItem(label, page, { ...opts, onClick: goto }))

  // First / Prev buttons
  addItem('First', 1, { disabled: currentPage === 1 })
  addItem('Prev', Math.max(1, currentPage - 1), { disabled: currentPage === 1 })

  // Sliding window for page numbers
  const { start, end } = getPageRange(currentPage, totalPages, 5)
  if (start > 1) addItem('...', 0, { disabled: true })

  for (let i = start; i <= end; i++) {
    addItem(i, i, { active: i === currentPage })
  }

  if (end < totalPages) addItem('...', 0, { disabled: true })

  // Next / Last buttons
  addItem('Next', Math.min(totalPages, currentPage + 1), { disabled: currentPage === totalPages })
  addItem('Last', totalPages, { disabled: currentPage === totalPages })

  return items
}

/**
 * Renders a specific page of items into the listElement.
 *
 * @param {HTMLElement} listElement - The element containing items to paginate.
 * @param {HTMLElement[]} children - Original child elements.
 * @param {number} page - Page number to render.
 * @param {number} pageSize - Number of items per page.
 * @param {MutationObserver} observer - Observer to prevent recursion.
 */
function renderPageItems(listElement, children, page, pageSize, observer) {
  safeObserveUpdate(observer, listElement, () => {
    const pageItems = paginateItems(children, page, pageSize)
    replaceChildren(listElement, pageItems)
  })
}

/**
 * Attaches pagination controls to a listElement.
 * The control element is linked via the `paginate` attribute.
 *
 * @param {HTMLElement} listElement - The container element whose children will be paginated.
 */
export function usePagination(listElement) {
  const controlEl = getElementByAttr(listElement, 'paginate')
  if (!controlEl) return

  const pageSize = parseInt(listElement.getAttribute('page-size'), 10) || 5
  const observer = new MutationObserver(refresh)

  let children = Array.from(listElement.children)
  let currentPage = 1
  let totalPages = Math.ceil(children.length / pageSize)

  /**
   * Navigate to a given page and render it.
   *
   * @param {number} page - Page number to go to.
   */
  function goto(page) {
    currentPage = page
    renderPage(page)
  }

  /**
   * Render page and update pagination controls.
   *
   * @param {number} page - Page number to render.
   */
  function renderPage(page) {
    renderPageItems(listElement, children, page, pageSize, observer)

    // Render pagination controls
    controlEl.innerHTML = ''
    const ul = document.createElement('ul')
    ul.className = 'pagination'

    const pageItems = buildPaginationItems(currentPage, totalPages, goto)
    pageItems.forEach((li) => ul.appendChild(li))
    controlEl.appendChild(ul)
  }

  /**
   * Refresh pagination state when listElement children change (e.g., filtering).
   */
  function refresh() {
    children = Array.from(listElement.children)
    totalPages = Math.ceil(children.length / pageSize)
    currentPage = clamp(currentPage, 1, totalPages || 1)
    renderPage(currentPage)
  }

  // Observe listElement for dynamic changes to children
  observer.observe(listElement, { childList: true })

  // Initialize pagination
  refresh()
}
