/**
 * @file features/useAsyncData.js
 * @description Loads a JSON data asynchronously and renders into a list element.
 */

import { getAttr } from '../utils/attr'
import { replaceChildren, renderItem } from '../utils/dom'

/**
 * Loads JSON data from a `data-src` URL and renders it into the given list element.
 * Uses a simple template replacement for each item.
 *
 * @param {HTMLElement} listEl
 */
export async function useAsyncData(listEl) {
  const src = getAttr(listEl, 'data-src')
  if (!src) return

  toggleLoader(listEl, true)
  const defaultTpl = '<li>{{name}}</li>'

  try {
    const template = getAttr(listEl, 'data-template', defaultTpl)

    // Fetch JSON data from the source
    const res = await fetch(src)
    const data = await res.json()

    // Render each data item into a DOM element
    const rendered = data.map((item) => renderItem(item, template))
    replaceChildren(listEl, rendered)
  } catch (e) {
    const error = 'Fltrx async fetch error'
    const message = renderItem({ name: `${error}.` }, defaultTpl)
    replaceChildren(listEl, [message])

    console.error(`${error}:`, e)
  } finally {
    toggleLoader(listEl, false)
  }
}

/**
 * Show or hide the loader element linked via `data-loader`.
 *
 * @param {HTMLElement} listEl - The list element with the `data-loader` attribute.
 * @param {boolean} show - Whether to show or hide the loader.
 */
function toggleLoader(listEl, show) {
  const loaderId = getAttr(listEl, 'data-loader')
  if (!loaderId) return

  const loaderEl = document.getElementById(loaderId)
  if (!loaderEl) return

  loaderEl.style.display = show ? '' : 'none'
}
