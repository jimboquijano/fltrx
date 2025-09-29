/**
 * @file utils/observer.js
 * @description Observer helpers
 */

/**
 * Temporarily disconnect observer while performing updates.
 *
 * @param {MutationObserver} observer
 * @param {HTMLElement} container
 * @param {function} fn
 */
export function safeObserveUpdate(observer, container, fn) {
  observer.disconnect()
  fn()

  observer.observe(container, { childList: true })
}
