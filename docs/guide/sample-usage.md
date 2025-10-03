# Sample Usage

## Filter

Add the `filter` attribute to link an input to a list/table:

```html
<input id="fruitFilter" placeholder="Search fruits" />

<ul filter="fruitFilter">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>

<div id="emptyEl">No matching results.</div>
```

## Highlight

Add the `filter-highlight="true"` attribute to highlight matched text:

```html
<input id="fruitFilter" placeholder="Search fruits" />

<ul filter="fruitFilter" filter-highlight="true">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>
```

## Grouping

Add the `groupby` attribute to link a select to a list/table:

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

## Sorting

Add the `sortby` attribute to link a select to a list/table:

### Global Select Sorting

```html
<select id="sortSelect">
  <option value="default">Default</option>
  <option value="asc">A→Z</option>
  <option value="desc">Z→A</option>
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

## Pagination

Add the `paginate` attribute to link a pagination to a list/table:

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

## Async Data

Add the `data-src` to fetch data to a list/table:

```html
<input id="asyncFilter" placeholder="Search fruits" />

<ul filter="asyncFilter" data-src="/fruits.json" data-template="<li>{{name}}</li>">
  <!-- Data will be populated here -->
</ul>
```
