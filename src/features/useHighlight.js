/**
 * @file useHighlight.js
 * @description Highlights the matched letters of the filtered results.
 */

import { getElementByAttr, getAttr } from '../utils/attr.js'
import { debounce } from '../utils/timing.js'
import {
  computeHighlightMask,
  removeExistingMarks,
  buildTextNodeReplacements,
  applyReplacements
} from '../utils/highlight.js'

/**
 * Enables highlighting of matching text inside listElement children.
 * Controlled via the `filter-highlight` attribute.
 *
 * @param {HTMLElement} listElement - The container element whose children will be highlighted.
 */
export function useHighlight(listElement) {
  // Exit early if highlighting is not enabled
  const highlightEnabled = getAttr(listElement, 'filter-highlight') === 'true'
  if (!highlightEnabled) return

  // Find the input element associated with this list via `filter` attribute
  const inputEl = getElementByAttr(listElement, 'filter')
  if (!inputEl) return

  /**
   * Highlights matched portions of the text in each child element.
   */
  function highlight() {
    const query = inputEl.value
    const mode = getAttr(listElement, 'filter-mode', 'default')

    Array.from(listElement.children).forEach((child) => {
      // Unwrap any existing <mark> inside this child to avoid nested marks
      removeExistingMarks(child)

      // nothing to highlight — leave DOM structure intact (marks already removed)
      const fullText = child.textContent || ''
      if (!query) return

      // Compute global mask for the full child text (so matches can span nested nodes)
      const mask = computeHighlightMask(fullText, query, mode)

      // If no bits set, nothing to do
      const hasMatch = Array.prototype.some.call(mask, (v) => !!v)
      if (!hasMatch) return

      // Build replacements for text nodes, then apply them
      const replacements = buildTextNodeReplacements(child, mask)
      if (replacements.length > 0) applyReplacements(replacements)
    })
  }

  // Listen to input changes to update highlights
  const debouncedHighlight = debounce(highlight, 150)
  inputEl.addEventListener('input', debouncedHighlight)

  // Apply initial highlighting if input has a pre-filled value
  highlight()
}
