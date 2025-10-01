/**
 * @file features/usePagination.js
 * @description Paginates the children of a list element using a linked pagination controls.
 */

import { buildPagination } from '../core/pagination'
import { getElementByAttr } from '../utils/attr'
import { replaceChildren } from '../utils/dom'
import { safeObserveUpdate, clampNumber } from '../utils/misc'

/**
 * Attaches pagination controls to a list element.
 * The control element is linked via the `paginate` attribute.
 *
 * @param {HTMLElement} listEl
 */
export function usePagination(listEl) {
  const controlEl = getElementByAttr(listEl, 'paginate')
  if (!controlEl) return

  const pageSize = parseInt(listEl.getAttribute('page-size'), 10) || 5
  const observer = new MutationObserver(paginate)

  let children = Array.from(listEl.children)
  let currentPage = parseInt(listEl.getAttribute('page-current'), 10) || 1
  let totalPages = Math.ceil(children.length / pageSize)

  /**
   * Navigate to a given page and render it.
   *
   * @param {number} page
   */
  function gotoPage(page) {
    currentPage = page
    renderPage(page)
  }

  /**
   * Render page and update pagination controls.
   *
   * @param {number} page
   */
  function renderPage(page) {
    renderPageItems(listEl, children, page, pageSize, observer)
    renderPageControls(controlEl, currentPage, totalPages, gotoPage)
  }

  /**
   * Refresh pagination state when list children change (e.g., filtering).
   */
  function paginate() {
    children = Array.from(listEl.children)
    totalPages = Math.ceil(children.length / pageSize)
    currentPage = clampNumber(currentPage, 1, totalPages || 1)
    renderPage(currentPage)
  }

  // Observe listEl for dynamic changes to children
  observer.observe(listEl, { childList: true })

  // Initialize pagination
  paginate()
}

/**
 * Renders a specific page of items into the list element.
 *
 * @param {HTMLElement} listEl
 * @param {HTMLElement[]} children
 * @param {number} page
 * @param {number} pageSize
 * @param {MutationObserver} observer
 */
function renderPageItems(listEl, children, page, pageSize, observer) {
  safeObserveUpdate(observer, listEl, () => {
    const start = (page - 1) * pageSize
    const pageItems = children.slice(start, start + pageSize)

    replaceChildren(listEl, pageItems)
  })
}

/**
 * Renders the pagination controls.
 *
 * @param {HTMLElement} controlEl
 * @param {number} currentPage
 * @param {number} totalPages
 * @param {function} gotoPage
 */
function renderPageControls(controlEl, currentPage, totalPages, gotoPage) {
  controlEl.innerHTML = ''
  const ul = document.createElement('ul')
  ul.className = 'pagination'

  if (totalPages) {
    const pageItems = buildPagination(currentPage, totalPages, gotoPage)
    pageItems.forEach((li) => ul.appendChild(li))
    controlEl.appendChild(ul)
  }
}
