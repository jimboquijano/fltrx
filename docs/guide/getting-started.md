# Getting Started

Fltrx is an **attribute-driven** JavaScript library to enhance your list and tables, with filtering, highlighting, sorting, grouping, pagination and async data binding.

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

```js
import { initFltrx } from 'fltrx'

// DOM is loaded
initFltrx()
```

(Optional) Initialize only ceratin features in your project:

```js
import { useFilter, usGrouping } from 'fltrx'

// DOM is loaded
useFilter(listEl)
usGrouping(listEl)
```
