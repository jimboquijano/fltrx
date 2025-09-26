/**
 * @file utils/timing.js
 * @description Timing helpers like debounce, throttle etc.
 */

/**
 * Simple debounce utility to limit how often a function runs.
 * @param {function} fn - function to call
 * @param {number} delay - milliseconds to wait after last call
 * @returns {function}
 */
export function debounce(fn, delay = 150) {
  let timeout

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}
