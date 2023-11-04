# stylelint-config-pretty-order

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![test](https://github.com/Tsuyoshi84/stylelint-config-pretty-order/actions/workflows/test.yml/badge.svg)](https://github.com/Tsuyoshi84/stylelint-config-pretty-order/actions/workflows/test.yml)

StyleLint config that prettifies CSS property order with [stylelint-order](https://github.com/hudochenkov/stylelint-order).

## Features

### Grouping

This config sorts properties based on the following group:

1. **Position** - e.g., `top`, `right`, `inset`, `z-index`, `float`
2. **Box model** - e.g., `display`, `width`, `height`, `margin`, `padding`, `border`
3. **Grid & Flex** - e.g., `grid`, `flex`, `align-content`, `place-content`, `justify-content`
4. **Overflow & Scroll** - e.g., `overflow`, `scroll-behavior`
5. **Layout** - e.g., `table-layout`, `columns`, `container`, `contain`
6. **Typography** - e.g., `font`, `text-align`, `white-space`
7. **Appearance** - e.g., `opacity`, `color`, `background`, `outline`, `filter`
8. **Interaction** - e.g., `translate`, `animation`, `transition`
9. **Others** - e.g., `cursor`, `content`

To check the complete property order, see [test.css](/test/test.css).

### Supports new properties

This config supports newly added CSS properties, such as:

- [Logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- [Individual transform properties](https://web.dev/articles/css-individual-transform-properties)
- [Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
- [Scroll driven animation](https://developer.chrome.com/articles/scroll-driven-animations/)
- [Initial letter](https://developer.chrome.com/blog/control-your-drop-caps-with-css-initial-letter/)

and so on.

## Installation

Install [stylelint](https://github.com/stylelint/stylelint) and this package according to the package manager:

```bash
npm i -D stylelint-config-pretty-order
```

```bash
yarn add --dev stylelint-config-pretty-order
```

```bash
pnpm add -D stylelint-config-pretty-order
```

```bash
bun add -D stylelint-config-pretty-order
```

## Usage

Add the following setting to your config:

```json
{
  "extends": "stylelint-config-pretty-order"
}
```

## Development

- Clone this repository
- Install dependencies using `bun install`

## License

MIT

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/stylelint-config-pretty-order?style=flat-square
[npm-version-href]: https://npmjs.com/package/stylelint-config-pretty-order
[npm-downloads-src]: https://img.shields.io/npm/dm/stylelint-config-pretty-order?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/stylelint-config-pretty-order
