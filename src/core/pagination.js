/**
 * @file core/pagination.js
 * @description Core functionality to generate pagination controls.
 */

/**
 * Builds an array of pagination (<li>) elements for the given state.
 *
 * @param {number} currentPage
 * @param {number} totalPages
 * @param {function} gotoPage
 * @returns {HTMLElement[]}
 */
export function buildPagination(currentPage, totalPages, gotoPage) {
  const items = []

  const addItem = (label, page, opts = {}) => {
    items.push(createPaginationItem(label, page, { ...opts, onClick: gotoPage }))
  }

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
 * Create a semantic pagination item (<li><a>) with click support.
 *
 * @param {string|number} label
 * @param {number} page
 * @param {{disabled?: boolean, active?: boolean, onClick?: function}} options
 * @returns {HTMLLIElement}
 */
export function createPaginationItem(
  label,
  page,
  { disabled = false, active = false, onClick } = {}
) {
  const li = document.createElement('li')
  li.className = 'page-item'
  if (disabled) li.classList.add('disabled')
  if (active) li.classList.add('active')
  li.dataset.page = page

  const btn = document.createElement('button')
  btn.className = 'page-link'
  btn.type = 'button'
  btn.textContent = label

  if (!disabled && !active && label !== '...') {
    btn.addEventListener('click', () => onClick?.(page))
  }

  li.appendChild(btn)
  return li
}

/**
 * Compute a sliding window page range.
 *
 * @param {number} current
 * @param {number} total
 * @param {number} maxVisible
 * @returns {{start: number, end: number}}
 */
export function getPageRange(current, total, maxVisible = 5) {
  let start = Math.max(1, current - 2)
  let end = Math.min(total, current + 2)

  if (current <= 3) {
    start = 1
    end = Math.min(maxVisible, total)
  } else if (current >= total - 2) {
    start = Math.max(1, total - maxVisible + 1)
    end = total
  }

  return { start, end }
}
