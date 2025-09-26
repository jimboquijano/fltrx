/**
 * @file match.js
 * @description Text matching helpers (fuzzy, regex, default)
 */

/**
 * Return indices of fuzzy matches between text and pattern.
 * @param {string} text
 * @param {string} pattern
 * @returns {number[]}
 */
export function getFuzzyMatchIndices(text, pattern) {
  const indices = []
  let lastIndex = 0

  for (const c of pattern) {
    const i = text.toLowerCase().indexOf(c.toLowerCase(), lastIndex)
    if (i === -1) return []

    indices.push(i)
    lastIndex = i + 1
  }

  return indices
}

/**
 * Match text against a query in default, regex, or fuzzy mode.
 * @param {string} text
 * @param {string} query
 * @param {string} mode
 * @returns {{match: boolean, indices: number[]}}
 */
export function matchText(text, query, mode = 'default') {
  if (!query) return { match: true, indices: [] }

  switch (mode) {
    case 'regex':
      try {
        const regex = new RegExp(query, 'i')
        return { match: regex.test(text), indices: [] }
      } catch {
        return { match: false, indices: [] }
      }
    case 'fuzzy':
      const indices = getFuzzyMatchIndices(text, query)
      return { match: indices.length > 0, indices }
    default:
      return {
        match: text.toLowerCase().includes(query.toLowerCase()),
        indices: []
      }
  }
}
