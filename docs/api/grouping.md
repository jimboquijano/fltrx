# Grouping

Generates a group for a list element using a linked `<select>` via `useGrouping(listEl)`.

## Activate

Grouping is activated by adding the `groupby` attribute on the list element.

```html
<select id="groupSelect"></select>

<ul groupby="groupSelect">
  <li group="Fruit">Apple</li>
  <li group="Vegetable">Carrot</li>
</ul>
```

Each `group` attribute on the list item will be aggregated in the linked `<select>`.

```html
<select id="groupSelect">
  <option value="All">All</option>
  <option value="Fruit">Fruit</option>
  <option value="Vegetable">Vegetable</option>
</select>
```

> **All** option will be added automatically.

## Method

`useGrouping(listEl)`

| Parameter | Type          | Description                                      |
| --------- | ------------- | ------------------------------------------------ |
| `listEl`  | `HTMLElement` | The list element whose children will be grouped. |

## Item

| Attribute | Type     | Description                                             |
| --------- | -------- | ------------------------------------------------------- |
| `group`   | `string` | Defines the group name to be generated on the grouping. |
