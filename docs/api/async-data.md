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

| Parameter | Type          | Description                                 |
| --------- | ------------- | ------------------------------------------- |
| `listEl`  | `HTMLElement` | The list element to render list items into. |

## Options

| Attribute       | Description                                              |
| --------------- | -------------------------------------------------------- |
| `data-src`      | The URL from which to fetch dynamic data.                |
| `data-template` | The HTML template used to render each fetched item.      |
| `data-loader`   | The element to show or hide while data is being fetched. |
