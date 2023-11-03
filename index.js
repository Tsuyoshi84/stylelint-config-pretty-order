// @ts-check

/**
 * @param {string | undefined} [name]
 * @returns {string[]}
 */
function top_right_bottom_left(name) {
	const prefix = name !== undefined ? `${name}-` : ''

	return [name ?? [], `${prefix}top`, `${prefix}right`, `${prefix}bottom`, `${prefix}left`].flat()
}

/**
 * @param {string | undefined} [name]
 * @returns {string[]}
 */
function block_inline(name) {
	const prefix = name !== undefined ? `${name}-` : ''

	return [
		`${prefix}block`,
		`${prefix}block-start`,
		`${prefix}block-end`,
		`${prefix}inline`,
		`${prefix}inline-start`,
		`${prefix}inline-end`,
	]
}

/**
 * @param {string} name
 * @returns {string[]}
 */
function start_end(name) {
	return [`${name}`, `${name}-start`, `${name}-end`]
}

/**
 * @param {string} name
 * @returns {string[]}
 */
function size_with_min_max(name) {
	return [name, `min-${name}`, `max-${name}`]
}

/**
 * @param {string | undefined} [name]
 * @returns {string[]}
 */
function border(name) {
	const infix = name !== undefined ? `-${name}` : ''

	return [`border${infix}`, `border${infix}-width`, `border${infix}-style`, `border${infix}-color`]
}

/** @type string[] */
const order = [
	'all',

	// position
	'position',
	'z-index',
	'isolation',
	top_right_bottom_left(),
	'inset',
	start_end('inset-block'),
	start_end('inset-inline'),

	// flow control
	'float',
	'clear',

	// display
	'display',
	'opacity',
	'visibility',
	'content-visibility',
	'backface-visibility',
	'content',

	// flex
	'flex',
	'flex-basis',
	'flex-direction',
	'flex-flow',
	'flex-grow',
	'flex-shrink',
	'flex-wrap',
	'order',

	// grid
	'grid',
	'grid-area',
	'grid-template',
	'grid-template-areas',
	'grid-template-columns',
	'grid-template-rows',
	'grid-auto-flow',
	'grid-auto-columns',
	'grid-auto-rows',
	'grid-gap',
	'grid-column',
	'grid-column-start',
	'grid-column-end',
	'grid-row',
	'grid-row-start',
	'grid-row-end',

	// place
	'align-content',
	'align-items',
	'align-self',
	'place-content',
	'place-items',
	'place-self',
	'justify-content',
	'justify-items',
	'justify-self',
	'gap',
	'column-gap',
	'row-gap',
	'vertical-align',

	// overflow
	'overflow',
	'overflow-x',
	'overflow-y',
	'overflow-inline',
	'overflow-block',
	'overflow-anchor',
	'overflow-clip-margin',

	// scroll
	'scroll-behavior',
	top_right_bottom_left('scroll-margin'),
	block_inline('scroll-margin'),
	top_right_bottom_left('scroll-padding'),
	block_inline('scroll-padding'),
	'scroll-snap-align',
	'scroll-snap-stop',
	'scroll-snap-type',
	'overscroll-behavior',
	'overscroll-behavior-x',
	'overscroll-behavior-y',
	'overscroll-behavior-inline',
	'overscroll-behavior-block',

	// table
	'table-layout',
	'caption-side',
	'empty-cells',
	'border-collapse',

	// column
	'columns',
	'column-count',
	'column-fill',
	'column-gap',
	'column-rule',
	'column-rule-color',
	'column-rule-style',
	'column-rule-width',
	'column-span',
	'column-width',
	'orphans',
	'widows',

	// container
	'container',
	'container-name',
	'container-type',

	// size
	size_with_min_max('width'),
	size_with_min_max('inline-size'),
	size_with_min_max('height'),
	size_with_min_max('block-size'),
	'aspect-ratio',
	'box-sizing',

	// contain
	'contain',
	'contain-intrinsic-size',
	'contain-intrinsic-width',
	'contain-intrinsic-height',
	'contain-intrinsic-inline-size',
	'contain-intrinsic-block-size',

	// margin
	top_right_bottom_left('margin'),
	block_inline('margin'),

	// padding
	top_right_bottom_left('padding'),
	block_inline('padding'),

	// border
	border(),
	border('top'),
	border('right'),
	border('bottom'),
	border('left'),
	border('block'),
	border('block-start'),
	border('block-end'),
	border('inline'),
	border('inline-start'),
	border('inline-end'),
	'border-radius',
	'border-top-left-radius',
	'border-top-right-radius',
	'border-bottom-right-radius',
	'border-bottom-left-radius',
	'border-start-start-radius',
	'border-start-end-radius',
	'border-end-end-radius',
	'border-end-start-radius',
	'border-image',
	'border-image-outset',
	'border-image-repeat',
	'border-image-slice',
	'border-image-source',
	'border-image-width',
	'border-spacing',
	'box-shadow',

	// outline
	'outline',
	'outline-color',
	'outline-offset',
	'outline-style',
	'outline-width',

	// scrollbar
	'scrollbar-color',
	'scrollbar-gutter',
	'scrollbar-width',

	// cursor
	'cursor',

	// font
	'font',
	'font-family',
	'font-size',
	'font-size-adjust',
	'font-stretch',
	'font-style',
	'font-variant',
	'font-weight',
	'font-feature-settings',
	'font-kerning',
	'font-language-override',
	'font-optical-sizing',
	'font-palette',
	'font-synthesis',
	'font-variant-alternates',
	'font-variant-caps',
	'font-variant-east-asian',
	'font-variant-ligatures',
	'font-variant-numeric',
	'font-variant-position',
	'font-variation-settings',
	'font-display',
	'letter-spacing',
	'line-height',

	// text
	'text-align',
	'text-align-last',
	'text-combine-upright',
	'text-decoration',
	'text-decoration-color',
	'text-decoration-line',
	'text-decoration-style',
	'text-decoration-skip-ink',
	'text-decoration-thickness',
	'text-indent',
	'text-justify',
	'text-shadow',
	'text-overflow',
	'text-rendering',
	'text-size-adjust',
	'text-transform',
	'text-underline-offset',
	'text-underline-position',
	'text-emphasis',
	'text-emphasis-color',
	'text-emphasis-position',
	'text-emphasis-style',
	'text-orientation',
	'text-overflow',
	'white-space',
	'white-space-collapse',
	'word-spacing',
	'word-wrap',
	'word-break',
	'overflow-wrap',
	'initial-letter',
	'initial-letter-align',
	'tab-size',
	'hyphens',
	'hyphenate-character',
	'hyphenate-limit-chars',
	'quotes',
	'line-break',
	'ruby-align',
	'ruby-position',
	'writing-mode',

	// appearance
	'color-scheme',
	'color',
	'accent-color',
	'caret-color',
	'background',
	'background-attachment',
	'background-blend-mode',
	'background-clip',
	'background-color',
	'background-image',
	'background-origin',
	'background-position',
	'background-position-x',
	'background-position-y',
	'background-repeat',
	'background-size',
	'mix-blend-mode',

	// image
	'image-orientation',
	'image-rendering',
	'image-resolution',
	'object-fit',
	'object-position',

	// filter
	'filter',
	'backdrop-filter',

	// mask / clip
	'mask',
	'mask-clip',
	'mask-composite',
	'mask-image',
	'mask-mode',
	'mask-origin',
	'mask-position',
	'mask-repeat',
	'mask-size',
	'mask-type',
	'clip',
	'clip-path',

	// shape
	'shape-image-threshold',
	'shape-margin',
	'shape-outside',

	// svg
	'paint-order',

	// transform
	'translate',
	'rotate',
	'scale',
	'transform',
	'transform-origin',
	'transform-style',
	'transform-box',
	'perspective',
	'perspective-origin',

	// animation / transition
	'animation',
	'animation-delay',
	'animation-direction',
	'animation-duration',
	'animation-fill-mode',
	'animation-iteration-count',
	'animation-name',
	'animation-play-state',
	'animation-timing-function',
	'timeline-scope',
	'transition',
	'transition-delay',
	'transition-duration',
	'transition-property',
	'transition-timing-function',
	'view-transition-name',
	'view-timeline',
	'view-timeline-name',
	'view-timeline-axis',
	'view-timeline-inset',
	'scroll-timeline',
	'scroll-timeline-name',
	'scroll-timeline-axis',

	// offset
	'offset',
	'offset-anchor',
	'offset-distance',
	'offset-path',
	'offset-position',
	'offset-rotate',

	// page
	'page',
	'page-break-before',
	'page-break-inside',
	'page-break-after',

	// action
	'user-select',
	'pointer-events',
	'touch-action',
].flat()

module.exports = {
	plugins: 'stylelint-order',
	rules: {
		'order/properties-order': [order, { unspecified: 'bottomAlphabetical', severity: 'warning' }],
	},
}
