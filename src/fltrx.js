/**
 * @file fltrx.js
 * @description Main entry for initializing and exporting all features.
 */

import { toggleEmptyState, useFilter } from './features/useFilter'
import { useGrouping } from './features/useGrouping'
import { useSorting } from './features/useSorting'
import { usePagination } from './features/usePagination'
import { useAsyncData } from './features/useAsyncData'
import { refreshChildrenCache } from './utils/misc'

// Re-export all hooks for easy imports elsewhere
export { useFilter } from './features/useFilter'
export { useSorting } from './features/useSorting'
export { usePagination } from './features/usePagination'
export { useGrouping } from './features/useGrouping'
export { useAsyncData } from './features/useAsyncData'

/**
 * Initializes all list features on DOMContentLoaded:
 *
 * - Loads async data for any element with `data-src`
 * - Sets up grouping and sorting where applicable
 * - Attaches filtering and highlighting where applicable
 * - Generates pagination controls and sets up paging
 */
export async function initFltrx(refresh = true) {
  document
    .querySelectorAll('[data-src], [filter], [groupby], [sortby], [paginate]')
    .forEach(async (listEl) => {
      if (refresh) {
        refreshChildrenCache(listEl)
      }

      toggleEmptyState(listEl, 1)

      // Load async data first
      if (listEl.hasAttribute('data-src')) {
        await useAsyncData(listEl)
        refreshChildrenCache(listEl)
      }

      // Initialize filtering, grouping, sorting, pagination
      if (listEl.hasAttribute('filter')) useFilter(listEl)
      if (listEl.hasAttribute('groupby')) useGrouping(listEl)
      if (listEl.hasAttribute('sortby')) useSorting(listEl)
      if (listEl.hasAttribute('paginate')) usePagination(listEl)
    })
}

// Auto-init when DOM is ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', async () => {
    initFltrx()
  })
}
