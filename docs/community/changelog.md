---
title: Changelog
sidebar: auto
---

# Changelog

All notable changes made to **Fltrx** are recorded in this document. Each update is tracked with version numbers, dates, and a summary of modifications. This project follows the principles of [Semantic Versioning](https://semver.org/) to ensure consistent and predictable version updates.

## [Unreleased]

### Added

- Planned auto-initialization for all features when a list is updated dynamically.
- Planned Vue 3 and React components.

### Changed

- N/A

### Fixed

- N/A

## [1.1.2] - 2025-10-03

### Added

- N/A

### Changed

- **Async Data** now displays an error message when a fetch fails.

### Fixed

- **Highlight** now triggers on all list elements when **Filtering** and **Grouping** are combined.
- The `filter-empty` element is now hidden while data is being fetched in **Async Data**.

## [1.1.0] - 2025-10-01

### Added

- **Sorting** can now automatically sort table columns on load.
- **Sorting** supports additional sorting modes.

### Changed

- **Grouping** now renders a new list instead of hiding items.
- Major improvements and refactors for better clarity and maintainability.

### Fixed

- **Sorting** now works correctly when used alongside **Filtering** and **Grouping**.

## [1.0.0] - 2025-09-26

### Added

- Initial public release of **Fltrx** 🎉
- Core features introduced:
  - **Filter** — Add input and select elements to filter list items dynamically.
  - **Highlight** — Automatically highlight matched terms inside list items.
  - **Grouping** — Organize list items under headings using the `groupby` attribute.
  - **Sorting** — Sort list items by `asc` / `desc` directly on load or by interaction.
  - **Pagination** — Split long lists into multiple pages with minimal setup.
  - **Async Data** — Load list items from a remote JSON file or API endpoint.
- Works out of the box with **vanilla JavaScript**, and integrates easily with **Vue 3** or **React**.
- Simple initialization through `initFtlrx()`, which auto-detects and wires up features.

### Changed

- N/A

### Fixed

- N/A

---

> **Note:** Use the `Unreleased` section for ongoing development.  
> When ready, move changes to a new version section following [Semantic Versioning](https://semver.org/).
