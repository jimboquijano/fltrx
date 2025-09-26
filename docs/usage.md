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
