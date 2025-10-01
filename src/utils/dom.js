/**
 * @file utils/dom.js
 * @description Low-level DOM + rendering utilities for Fltrx.
 */

/**
 * Replaces all children of a container with a new set.
 *
 * @param {HTMLElement} container
 * @param {HTMLElement[]} newChildren
 */
export function replaceChildren(container, newChildren) {
  container.innerHTML = ''
  newChildren.forEach((c) => container.appendChild(c))
}

/**
 * Renders a single data item into a DOM element using the provided template.
 *
 * @param {Object} item
 * @param {string} template
 * @returns {HTMLElement}
 */
export function renderItem(item, template) {
  // Replace {{key}} placeholders with actual data values
  const html = template.replace(/\{\{(\w+)\}\}/g, (_, key) => item[key] ?? '')

  // Convert HTML string into a DOM element
  const temp = document.createElement('div')
  temp.innerHTML = html

  return temp.firstElementChild
}

/**
 * Apply replacements for text nodes (replace each text node with the HTML fragment).
 *
 * @param {Array<{node: Text, html: string}>} replacements
 */
export function applyReplacements(replacements) {
  for (const { node, html } of replacements) {
    const wrapper = document.createElement('span')
    wrapper.innerHTML = html

    const frag = document.createDocumentFragment()
    while (wrapper.firstChild) frag.appendChild(wrapper.firstChild)
    node.parentNode.replaceChild(frag, node)
  }
}
