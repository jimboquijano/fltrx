# Filter

Sets up a live filter for a list element using a linked `<input>` via `useFilter(listEl)`.

## Activate

Filtering is activated by adding the `filter` attribute on the list element.

```html
<input id="fruitFilter" placeholder="Search fruits" />

<ul filter="fruitFilter">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>

<div id="emptyEl">No matching results.</div>
```

## Method

`useFilter(listEl)`

| Parameter | Type                     | Description                                       |
| --------- | ------------------------ | ------------------------------------------------- |
| `listEl`  | `UL`, `OL`, `TABLE body` | The list element whose children will be filtered. |

## Options

| Attribute          | Values                      | Description                               |
| ------------------ | --------------------------- | ----------------------------------------- |
| `filter-mode`      | `default`, `regex`, `fuzzy` | Defines the filtering behavior.           |
| `filter-highlight` | `true`, `false`             | Enables the highlighting of matched text. |
| `filter-empty`     | `Node`                      | The element to display on empty list.     |

## Modes

| Name      | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| `default` | Matches string based a standard pattern. E.g., `app` → Apple     |
| `fuzzy`   | Matches string based on approximate matches. E.g., `apl` → Apple |
| `regex`   | Matches stting based on JS regex patterns. E.g., `^A` → Apple    |
