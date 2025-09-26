# Get Started

**Attribute-driven** JavaScript library to enhance your list and tables. With filtering, highlighting, sorting, grouping, pagination and async data binding.

## Installation

Get Fltrx via CDN:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/fltrx@1.0.0/dist/fltrx.umd.js"></script>
```

Or, get it via NPM:

```code
npm install fltrx
```

```js
import { initFltrx } from 'fltrx'
initFltrx()
```

(Optional) Access the features:

```js
import { useFilter, useHighlight } from '/src/fltrx.js'
```

For pagination style, use this [gist](https://gist.github.com/jimboquijano/936c4d063234db4f7699f0177d20e4f4)

## Key Features

### 1. Attribute-driven Setup

- Link inputs and selects directly to lists or tables
- Easily integrate all functionality via attributes

### 2. Advanced Filtering

- Supports **default, regex, and fuzzy** search
- Real-time filtering as the user types
- Removes DOM nodes instead of hiding
- Preserves all event listeners like click
- Throttling and debouncing for performance

### 3. Highlighting Matches

- Highlight matched letters during filter
- Fully compatible with fuzzy and regex search
- Supports multi-character and case-insensitive matches

### 4. Grouping

- Single or multi-select grouping
- Includes an **“All”** option to show all items

### 5. Sorting

- Global sorting via select dropdown
- Table **column sorting** with `asc`/`desc` indicators
- Works seamlessly with filtered and paginated data

### 6. Pagination

- Semantic and industry standard buttons
- Automatically handles large page ranges with ellipsis (`…`)
- Dynamic updates when children changes

### 7. Async Data Binding

- Load JSON dynamically and render with templates
- Inline buttons and events are preserved
- Fully compatible with all functionality above

## Why Fltrx?

- **Easy to use:** minimal attributes, no complex JS setup required
- **Event-safe:** click events and interactions remain intact after filtering or pagination
- **Flexible:** works on lists and tables, supports advanced search patterns
- **Composable-ready:** fully modular for use with Vite or modern JS frameworks
