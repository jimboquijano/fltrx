/**
 * @file utils/dom.js
 * @description DOM / rendering helpers
 */

/**
 * Replace all children of a container with a new set.
 *
 * @param {HTMLElement} container
 * @param {HTMLElement[]} newChildren
 */
export function replaceChildren(container, newChildren) {
  container.innerHTML = ''
  newChildren.forEach((c) => container.appendChild(c))
}
