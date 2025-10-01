# Async Data

Loads a data from a remote URL and renders it into a list element via `useAsyncData(listEl)`.

## Activate

Async Data is activated by adding the `data-src` attribute on the list element.

```html
<input id="asyncFilter" placeholder="Search fruits" />

<ul filter="asyncFilter" data-src="/fruits.json" data-template="<li>{{name}}</li>">
  <!-- Data will be populated here -->
</ul>
```

## Method

`useAsyncData(listEl)`

| Parameter | Type                     | Description                                 |
| --------- | ------------------------ | ------------------------------------------- |
| `listEl`  | `UL`, `OL`, `TABLE body` | The list element to render list items into. |

## Options

| Attribute       | Description                                        |
| --------------- | -------------------------------------------------- |
| `data-src`      | The URL source to the fetch the dynamic data from. |
| `data-template` | The HTML template for rendering each item.         |
