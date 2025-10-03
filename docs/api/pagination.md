# Pagination

Attaches a pagination controls to a `container` for a list element via `usePagination(listEl)`.

## Activate

Pagination is activated by adding the `paginate` attribute on the list element.

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

## Method

`usePagination(listEl)`

| Parameter | Type          | Description                                       |
| --------- | ------------- | ------------------------------------------------- |
| `listEl`  | `HTMLElement` | The list element whose children will be filtered. |

## Options

| Attribute      | Default | Description                          |
| -------------- | ------- | ------------------------------------ |
| `page-size`    | 5       | Defines the total number of pages.   |
| `page-current` | 1       | Defines the current page to display. |

## Note

> For pagination style, use this [gist](https://gist.github.com/jimboquijano/936c4d063234db4f7699f0177d20e4f4)
