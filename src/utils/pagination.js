/**
 * @file utils/pagination.js
 * @description Pagination helpers
 */

/**
 * Clamp a number between min and max.
 *
 * @param {number} num
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max)
}

/**
 * Slice items for a given page.
 *
 * @param {any[]} items
 * @param {number} page
 * @param {number} pageSize
 * @returns {any[]}
 */
export function paginateItems(items, page, pageSize) {
  const start = (page - 1) * pageSize
  return items.slice(start, start + pageSize)
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
