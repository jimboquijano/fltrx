# Highlight

Enables highlighting of matching string to all `child` element via `useHighlight(listEl)`.

## Trigger

Highlighting is activated by adding the `filter-highlight` attribute on the list element.

```html
<input id="fruitFilter" placeholder="Search fruits" />

<ul filter="fruitFilter" filter-highlight="true">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>
```

> Works with **default**, **fuzzy**, and **regex** modes

## Method

`useHighlight(listEl)`

| Parameter | Type          | Description                                          |
| --------- | ------------- | ---------------------------------------------------- |
| `listEl`  | `HTMLElement` | The list element whose children will be highlighted. |
