---
title: Changelog
sidebar: auto
---

# Changelog

All notable changes made to **Fltrx** are recorded in this document. Each update is tracked with version numbers, dates, and a summary of modifications. This project follows the principles of [Semantic Versioning](https://semver.org/) to ensure consistent and predictable version updates.

## [Unreleased]

### Added

- Planned auto initialization for all features when a list is updated dynamically.

### Changed

- N/A

### Fixed

- N/A

## [1.1.0] - 2025-10-01

### Added

- **Sorting** now has the ability to auto sort table columns on load.
- **Sorting** now has more supported modes of sorting.

### Changed

- **Grouping** now renders a new list instead of hinding some items.
- **Major** improvements and refactors for future clarity and readability.

### Fixed

- Fixed an issue where **Sorting** did not work correctly and as intended, when used alongside **Filter** and **Grouping**.

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
