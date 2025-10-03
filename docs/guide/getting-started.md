# Getting Started

Fltrx is an **Attribute-driven** JavaScript library to enhance your list and tables, with filtering, highlighting, sorting, grouping, pagination and async data binding.

## Installation

Get Fltrx via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/fltrx@latest/dist/fltrx.umd.min.js"></script>
```

Or, get it via NPM:

```bash
npm install fltrx
```

## Initialization

For CDN, Fltrx initializes automatically on load. For NPM, do the following:

```bash
import { initFltrx } from 'fltrx'
initFltrx()
```

(Optional) Access other features:

```js
import { useFilter, useHighlight } from 'fltrx'
```

## Note

> For pagination style, use this [gist](https://gist.github.com/jimboquijano/936c4d063234db4f7699f0177d20e4f4)
