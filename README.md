# Fltrx

Fltrx is an attribute-driven JavaScript library to enhance your list and tables. With filtering, highlighting, sorting, grouping, pagination and async data binding.

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

# Getting Started

## Installation

Include Fltrx in your project:

```html
<script type="module" src="/src/fltrx.js"></script>
```

Or, if using composables:

```js
import { initFltrx } from '/src/fltrx.js'
initFltrx()
```

Access the features directly:

```js
import { useFilter, useHighlight } from '/src/fltrx.js'
```

(Optional) For pagination style, use this [gist](https://gist.github.com/jimboquijano/936c4d063234db4f7699f0177d20e4f4)

# Usage

## Filtering

- Link an input to a list/table with `filter`:

```html
<input id="fruitFilter" placeholder="Search fruits" />

<ul filter="fruitFilter">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>
```

### Filtering Modes

- **Default:** exact substring match
- **Fuzzy:** `filter-mode="fuzzy"` (matches letters in order, e.g., `apl` → Apple)
- **Regex:** `filter-mode="regex"` (supports JavaScript regex patterns)

## Highlighting

- Add `filter-highlight="true"` to highlight matched text with `<mark>`.

```html
<input id="fruitFilter" placeholder="Search fruits" />

<ul filter="fruitFilter" filter-highlight="true">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>
```

- Works with **default**, **fuzzy**, and **regex** modes

## Grouping

- Link a select to a list/table with `groupby`:

### Single Select

```html
<select id="groupSelect"></select>

<ul groupby="groupSelect" filter-highlight="true">
  <li group="Fruit">Apple</li>
  <li group="Vegetable">Carrot</li>
</ul>
```

### Multi-Select

```html
<select id="multiGroup" multiple></select>

<ul groupby="multiGroup" filter-highlight="true">
  <li group="Fruit">Apple</li>
  <li group="Vegetable">Carrot</li>
  <li group="Fruit">Banana</li>
</ul>
```

- **All** option is added automatically
- Selecting a group, filters the list accordingly

## Sorting

- Link a select to a list/table `sortby`:

### Global Select Sorting

```html
<select id="sortSelect">
  <option value="Default">Default</option>
  <option value="A→Z">A→Z</option>
  <option value="Z→A">Z→A</option>
</select>

<ul filter="sortFilter" sortby="sortSelect">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>
```

### Table Column Sorting

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody sortby="">
    <tr>
      <td>Apple</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
```

- Click on a column header to sort
- Visual indicators (`asc`/`desc`) are automatically added

## Pagination

- Link a controls container to a list/table `paginate`:

```html
<div id="paginationControls"></div>

<ul paginate="paginationControls" page-size="3">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
  <li>Date</li>
  <li>Elderberry</li>
</ul>
```

- Numeric buttons with **sliding window and ellipsis** if pages > 5
- Includes **First / Prev / Next / Last** buttons
- Works with **filtered data** and preserves events

## Async Data

```html
<input id="asyncFilter" placeholder="Search fruits" />

<ul
  filter="asyncFilter"
  data-src="/fruits.json"
  data-template="<li group='{{group}}' data-sort='{{name}}'><button onclick='alert(&quot;{{name}} clicked!&quot;)'>{{name}}</button></li>"
  groupby="asyncGroup"
  sortby="asyncSort"
  paginate="asyncPagination"
  page-size="4"
  filter-highlight="true"
></ul>
```

- `data-src` → URL of JSON file
- `data-template` → template for each item, supports inline buttons/events
- Works with **filtering, highlight, grouping, sorting, and pagination**

# API Reference

## Features

### `useFilter(listElement)`

- **Description:** Filters the children of **listElement** using the linked `<input>`.
- **listElement:** UL, OL, or TABLE body
- **Attributes:**
  - `filter="inputId"` - links the **listElement** to an `<input>`
  - `filter-mode="default|regex|fuzzy"` – defines the filtering behavior
  - `filter-highlight="true"` – enables the highlighting of matched text

### `useHighlight(listElement)`

- **Description:** Highlights the matched letters of the filtered results.
- **listElement:** UL, OL, or TABLE body
- **Features:**
  - Works with **fuzzy and regex** matches
  - Uses `<mark>` for highlighting

### `useGrouping(listElement)`

- **Description:** Groups the children of **listElement** using the linked `<select>`.
- **listElement:** UL, OL, or TABLE body
- **Attributes:**
  - `groupBy="selectId"` - links the **listElement** to a `<select>`
  - `group="groupName"` - links the children of **listElement** to a `<select>` option
- **Features:**
  - Supports single-select or multi-select
  - Includes an **"All"** option to display all items

### `useFilterAngGroup(listElement)`

- **Description:** Similar to `useFilter` but takes into account the `useGrouping`.
- **listElement:** UL, OL, or TABLE body
- **Attributes:**
  - `filter="inputId"` - links the **listElement** to an `<input>`
  - `filter-mode="default|regex|fuzzy"` – defines the filtering behavior
  - `filter-highlight="true"` – enables the highlighting of matched text
  - `filter="inputId"` - links the **listElement** to an `<input>`
  - `filter-mode="default|regex|fuzzy"` – defines the filtering behavior
  - `filter-highlight="true"` – enables the highlighting of matched text

### `useSorting(listElement)`

- **Description:** Sorts the children of **listElement** using the linked `<select>`.
- **listElement:** UL, OL, or TABLE body
- **Attributes:**
  - `sortby="selectId"` - links the **listElement** to a `<select>`
  - `sortby=""` - activates the **listElement** for column sorting
- **Features:**
  - **Column sorting** has clickable `<th>` headers in a table body
  - **Column headers** display ascending/descending indicators

### `usePagination(listElement)`

- **Description:** Paginates the children of **listElement** using the linked `pagination controls`.
- **listElement:** UL, OL, or TABLE body
- **Attributes:**
  - `paginate="controlsId"` - links the **listElement** to a `pagination controls`
  - `page-size="5"` - sets number of pagination items per page
- **Features:**
  - Semantic buttons: First, Prev, numeric pages, Next, Last
  - Handles large page ranges with ellipsis
  - Works with filtered or grouped items

### `useAsyncData(listElement)`

- **Description:** Loads the JSON data asynchronously and renders into the **listElement**.
- **listElement:** UL, OL, or TABLE body
- **Attributes:**
  - `data-src` - the URL source to the fetch the dynamic data from
  - `data-template` - the HTML template for rendering each item
- **Features:**
  - Allows dynamic templating with `{property}` interpolation
  - Supports grouping, sorting, pagination, and highlighting

## License

MIT © Jimbo Quijano
