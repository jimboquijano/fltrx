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

### `useGrouping(listElement)`

- **Description:** Groups the children of **listElement** using the linked `<select>`.
- **listElement:** UL, OL, or TABLE body
- **Attributes:**
  - `groupBy="selectId"` - links the **listElement** to a `<select>`
  - `group="groupName"` - links the children of **listElement** to a `<select>` option

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

### `usePagination(listElement)`

- **Description:** Paginates the children of **listElement** using the linked `pagination controls`.
- **listElement:** UL, OL, or TABLE body
- **Attributes:**
  - `paginate="controlsId"` - links the **listElement** to a `pagination controls`
  - `page-size="5"` - sets number of pagination items per page

### `useAsyncData(listElement)`

- **Description:** Loads the JSON data asynchronously and renders into the **listElement**.
- **listElement:** UL, OL, or TABLE body
- **Attributes:**
  - `data-src` - the URL source to the fetch the dynamic data from
  - `data-template` - the HTML template for rendering each item
