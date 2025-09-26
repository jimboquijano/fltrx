/**
 * @file attr.js
 * @description Attribute helpers
 */

/**
 * Get an attribute value with optional fallback.
 * @param {HTMLElement} el
 * @param {string} name
 * @param {any} fallback
 * @returns {string|null}
 */
export function getAttr(el, name, fallback = null) {
  return el.hasAttribute(name) ? el.getAttribute(name) : fallback
}

/**
 * Resolve an element by an attribute that holds an element ID.
 * @param {HTMLElement} el
 * @param {string} attrName
 * @returns {HTMLElement|null}
 */
export function getElementByAttr(el, attrName) {
  const id = el.getAttribute(attrName)
  return id ? document.getElementById(id) : null
}
