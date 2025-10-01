# FAQ

Below are some of the most common questions about using **Fltrx**, covering general usage, feature behavior, and troubleshooting advice to help you get the most out of the library.

## General

<details>
<summary>What is Fltrx and why should I use it?</summary>

Fltrx is a lightweight JavaScript library for building filterable, sortable, and paginated lists. It also supports grouping and async data loading — all with minimal markup.

- **Easy to use:** minimal attributes, no complex JS setup required
- **Event-safe:** click events and interactions remain intact after filtering or pagination
- **Flexible:** works on lists and tables, supports advanced search patterns
- **Composable-ready:** fully modular for use with Vite or modern JS frameworks

</details>

<details>
<summary>Do I need a build process or framework?</summary>

No. Fltrx is framework-agnostic and runs in any modern browser. You can integrate it with vanilla JavaScript, Vue 3, React, or other JavaScript frameworks and libraries.

</details>

## Features

<details>
<summary>Does filtering conflict with grouping or pagination?</summary>

No. Filtering works seamlessly with grouping, pagination, and other features. You can see it in action in the [combinations showcase](../showcase/combination.html).

- If your list has **both filter & grouping**, Fltrx uses `useFilterAndGroup`.
- If your list has **only grouping**, Fltrx uses `useGrouping` instead.
- If your list has **pagination**, Fltrx filters only the current page.

</details>

<details>
<summary>Why does the pagination look visually broken?</summary>

Fltrx is style-agnostic. It does not provide styles automatically. You can use this [gist](https://gist.github.com/jimboquijano/936c4d063234db4f7699f0177d20e4f4) to style your pagination. Ultimately, it is up to you to style your UI however you prefer.

</details>

<details>
<summary>How can I sort a table column automatically on load?</summary>

Add an `asc` or `desc` class to the corresponding `<thead>` column, and Fltrx will automatically sort your list on load. See the [sorting showcase](../showcase/sorting.html) for an example.

</details>

<details>
<summary>Why doesn’t the column sorting have a visual indicator?</summary>

You can add a custom visual indicator to a `<thead>` column by applying the `asc` or `desc` class. A common approach is to use the ::after pseudo-element. For example:

```css
th.asc::after {
  content: ' 🔼';
}
```

</details>

<details>
<summary>Can I customize the highlight style?</summary>

Yes. Highlighted text is wrapped in `<mark>` tags by default. You can override this with your own CSS to change the color, background, or text style.

</details>

<details>
<summary>Does highlighting slow down filtering?</summary>

No. Fltrx uses efficient DOM replacement and optional throttling to keep highlighting fast and performant, even on large lists, specially on tables with large dataset.

</details>

<details>
<summary>How do I load remote data using async data?</summary>

Add a `data-src` attribute to your list container pointing to a JSON file or API. Fltrx will automatically fetch and render the data before applying filters, groups, and other features.

</details>

<details>
<summary>How can I customize the list when using async data?</summary>

Add a `data-template` attribute to your list container. Fltrx uses simple template replacement for each item to render your data. For example:

```html
<li>{{name}}</li>
```

</details>

<details>
<summary>What happens when the list updates dynamically?</summary>

If you remove or add new items to the list container, call `initFtlrx()` again so the new elements are initialized. However, if you’re only using pagination, you don’t need to reinitialize — pagination uses an observer to automatically update the pages.

</details>

## Troubleshooting

<details>
<summary>My filter input or select isn’t doing anything.</summary>

Check that:

- The Fltrx attributes on your list container match the input/select elements.
- You’ve called `initFtlrx()` after the DOM is ready or inside `onMounted()` in Vue.

</details>

## Need more help?

If you run into a bug, open an issue or start a discussion in the project repository.
