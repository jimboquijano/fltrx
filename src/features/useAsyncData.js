/**
 * @file useAsyncData.js
 * @description Loads the JSON data asynchronously and renders into the listElement.
 */

import { getAttr } from '../utils/attr.js'
import { replaceChildren } from '../utils/dom.js'

/**
 * Renders a single data item into a DOM element using the provided template.
 *
 * @param {Object} item - The data object to render.
 * @param {string} template - HTML template string with {{key}} placeholders.
 * @returns {HTMLElement} The rendered DOM element.
 */
function renderItem(item, template) {
  // Replace {{key}} placeholders with actual data values
  const html = template.replace(/\{\{(\w+)\}\}/g, (_, key) => item[key] ?? '')

  // Convert HTML string into a DOM element
  const temp = document.createElement('div')
  temp.innerHTML = html

  return temp.firstElementChild
}

/**
 * Loads JSON data from a `data-src` URL and renders it into the given `listElement`.
 * Uses a simple template replacement for each item.
 *
 * @param {HTMLElement} listElement - The target element to render list items into.
 */
export async function useAsyncData(listElement) {
  const src = getAttr(listElement, 'data-src')
  if (!src) return // Exit early if no data source is provided

  try {
    const template = getAttr(listElement, 'data-template', '<li>{{name}}</li>')

    // Fetch JSON data from the source
    const res = await fetch(src)
    const data = await res.json()

    // Render each data item into a DOM element
    const rendered = data.map((item) => renderItem(item, template))

    // Replace existing children with rendered elements
    replaceChildren(listElement, rendered)
  } catch (error) {
    console.error('Fltrx async fetch error:', error)
  }
}
