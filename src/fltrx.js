/**
 * @file fltrx.js
 * @description Main entry for initializing and exporting all features.
 *
 */

import { useAsyncData } from './features/useAsyncData.js'
import { useFilterAndGroup } from './features/useFilterAndGroup.js'
import { useHighlight } from './features/useHighlight.js'
import { useGrouping } from './features/useGrouping.js'
import { useSorting } from './features/useSorting.js'
import { usePagination } from './features/usePagination.js'

// Re-export all hooks for easy imports elsewhere
export { useFilter } from './features/useFilter.js'
export { useFilterAndGroup } from './features/useFilterAndGroup.js'
export { useHighlight } from './features/useHighlight.js'
export { useSorting } from './features/useSorting.js'
export { usePagination } from './features/usePagination.js'
export { useGrouping } from './features/useGrouping.js'
export { useAsyncData } from './features/useAsyncData.js'

/**
 * Initializes all list features on DOMContentLoaded:
 * - Loads async data for any element with `data-src`
 * - Attaches filtering and highlighting for elements with `filter` attribute
 * - Sets up grouping, sorting, and pagination where applicable
 */
export async function initFtlrx() {
  // Load async data first
  const asyncEls = document.querySelectorAll('[data-src]')
  for (const listElement of asyncEls) {
    await useAsyncData(listElement)
  }

  // Initialize filtering and highlighting
  document.querySelectorAll('[filter]').forEach((listElement) => {
    useFilterAndGroup(listElement)
    useHighlight(listElement)
  })

  // Initialize grouping for elements that have [groupby] but no [filter]
  document.querySelectorAll('[groupby]').forEach((listElement) => {
    if (!listElement.hasAttribute('filter')) {
      useGrouping(listElement)
    }
  })

  // Initialize sorting
  document.querySelectorAll('[sortby]').forEach((listElement) => useSorting(listElement))

  // Initialize pagination
  document.querySelectorAll('[paginate]').forEach((listElement) => usePagination(listElement))
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', async () => {
    initFtlrx()
  })
}
