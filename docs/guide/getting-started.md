# Getting Started

Fltrx is an **Attribute-driven** JavaScript library to enhance your list and tables. With filtering, highlighting, sorting, grouping, pagination and async data binding.

## Download

Get Fltrx via CDN:

```code
https://cdn.jsdelivr.net/npm/fltrx@latest/dist/fltrx.umd.js
```

Or, get it via NPM:

```bash
npm install fltrx
```

## Installation

Initialize automatically on load:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/fltrx@latest/dist/fltrx.umd.js"></script>
```

Or, intialize manually on your project

```bash
import { initFltrx } from 'fltrx'
initFltrx()
```

(Optional) Access other features:

```js
import { useFilter, useHighlight } from 'fltrx'
```

## Note

Fltrx only creates DOM elements for pagination feature.

> For pagination style, use this [gist](https://gist.github.com/jimboquijano/936c4d063234db4f7699f0177d20e4f4)
