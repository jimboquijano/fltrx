# Sorting

Enables sorting for a list element using a linked `<select>` element via `useSorting(listEl)`.

## Activate

Sorting is activated by adding the `sortby` attribute on the list element.

::: tabs

== Global Select

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

== Table Column

```html
<table>
  <thead>
    <tr>
      <th class="asc">Name</th>
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

> Adding a `asc`/`desc` class to the `<thead>` column will auto sort your list.

:::

## Method

`useFilter(listEl)`

| Parameter | Type                     | Description                                          |
| --------- | ------------------------ | ---------------------------------------------------- |
| `listEl`  | `UL`, `OL`, `TABLE body` | The container element whose children will be sorted. |

## Modes

| Name        | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `default`   | Sorts the list back in its original order.                     |
| `asc`       | Sorts text in ascending alphabetical order (A → Z).            |
| `desc`      | Sorts text in descending alphabetical order (Z → A).           |
| `num-asc`   | Sorts numbers in ascending order (smallest → largest).         |
| `num-desc`  | Sorts numbers in descending order (largest → smallest).        |
| `date-asc`  | Sorts dates in ascending order (oldest → newest).              |
| `date-desc` | Sorts dates in descending order (newest → oldest).             |
| `len-asc`   | Sorts text by length in ascending order (shortest → longest).  |
| `len-desc`  | Sorts text by length in descending order (longest → shortest). |
| `shuffle`   | Randomizes the order of the list.                              |
