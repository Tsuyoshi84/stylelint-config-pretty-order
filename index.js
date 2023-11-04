// @ts-check

module.exports = {
	plugins: 'stylelint-order',
	rules: {
		'order/properties-order': [order(), { unspecified: 'bottomAlphabetical', severity: 'warning' }],
	},
}

/**
 * @returns {string[]} Array of property names
 */
function order() {
	return [
		'all',
		position(),
		box_model(),
		grid_flex(),
		overflow_scroll(),
		layout(),
		typography(),
		appearance(),
		interaction(),
		others(),
	].flat()
}

function position() {
	return [
		// position
		'position',
		'z-index',
		'isolation',
		top_right_bottom_left(),
		'inset',
		inline_block('inset').flatMap(start_end),

		// flow control
		'float',
		'clear',
	].flat()
}

function box_model() {
	return [
		// box
		'display',
		'box-sizing',

		// size
		['width', 'height', 'inline-size', 'block-size'].flatMap(min_max),
		'aspect-ratio',

		// margin
		all_sizes('margin'),

		// padding
		all_sizes('padding'),

		// border
		border(),
		top_right_bottom_left().flatMap(border),
		['inline', 'block'].flatMap(start_end).flatMap(border),
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
	].flat()
}

function grid_flex() {
	return [
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
		start_end('grid-column'),
		start_end('grid-row'),

		// flex
		'flex',
		'flex-basis',
		'flex-direction',
		'flex-flow',
		'flex-grow',
		'flex-shrink',
		'flex-wrap',
		'order',

		// place
		['align', 'place', 'justify'].flatMap(content_items_self),
		'gap',
		'column-gap',
		'row-gap',
		'vertical-align',
	].flat()
}

function overflow_scroll() {
	return [
		// overflow
		x_y_inline_block('overflow'),
		'overflow-anchor',
		'overflow-clip-margin',

		// scroll
		'scroll-behavior',
		all_sizes('scroll-margin'),
		all_sizes('scroll-padding'),
		'scroll-snap-align',
		'scroll-snap-stop',
		'scroll-snap-type',
		x_y_inline_block('overscroll-behavior'),
	].flat()
}

function layout() {
	return [
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

		// contain
		'contain',
		'contain-intrinsic-size',
		'contain-intrinsic-width',
		'contain-intrinsic-height',
		'contain-intrinsic-inline-size',
		'contain-intrinsic-block-size',
	]
}

function typography() {
	return [
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

		// @font-face
		'src',
		'ascent-override',
		'descent-override',
		'line-gap-override',
		'unicode-range',

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

		// white space & word wrapping
		'white-space',
		'white-space-collapse',
		'word-spacing',
		'word-wrap',
		'word-break',
		'overflow-wrap',

		// letter appearance
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
	]
}

function appearance() {
	return [
		// visibility
		'opacity',
		'visibility',
		'content-visibility',
		'backface-visibility',

		// color
		'color-scheme',
		'color',
		'accent-color',
		'caret-color',

		// background
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
	]
}

function interaction() {
	return [
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

		// animation
		'animation',
		'animation-delay',
		'animation-direction',
		'animation-duration',
		'animation-fill-mode',
		'animation-iteration-count',
		'animation-name',
		'animation-play-state',
		'animation-range',
		'animation-range-start',
		'animation-range-end',
		'animation-timeline',
		'animation-timing-function',
		'timeline-scope',

		// transition
		'transition',
		'transition-delay',
		'transition-duration',
		'transition-property',
		'transition-timing-function',

		// view transition
		'view-transition-name',

		// timeline
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
	]
}

function others() {
	return [
		// action
		'cursor',
		'user-select',
		'pointer-events',
		'touch-action',
		'resize',

		// content
		'content',
		'counter-increment',
		'counter-reset',
		'counter-set',

		// page & print
		'page',
		'page-break-before',
		'page-break-inside',
		'page-break-after',
		'print-color-adjust',
	]
}

/**
 * Returns an array of property names with the following suffixes:
 * - top
 * - right
 * - bottom
 * - left
 * @param {string | undefined} [name] Base property name
 * @returns {string[]} Array of property names
 */
function top_right_bottom_left(name) {
	const prefix = name !== undefined ? `${name}-` : ''
	const properties = ['top', 'right', 'bottom', 'left'].map(after(prefix))

	return [name ?? [], properties].flat()
}

/**
 * Returns an array of property names with the following suffixes:
 * - x
 * - y
 * @param {string} name Base property name
 * @returns {string[]} Array of property names
 */
function x_y(name) {
	return ['-x', '-y'].map(after(name))
}

/**
 * Returns an array of property names with the following suffixes:
 * - inline
 * - block
 * @param {string} name Base property name
 * @returns {string[]} Array of property names
 */
function inline_block(name) {
	return ['-inline', '-block'].map(after(name))
}

/**
 * Returns an array of property names with the following suffixes:
 * - x
 * - y
 * - inline
 * - block
 * @param {string} name Base property name
 * @returns {string[]} Array of property names
 */
function x_y_inline_block(name) {
	return [name, ...x_y(name), ...inline_block(name)]
}

/**
 * Returns an array of property names with the following suffixes:
 * - inline
 * - inline-start
 * - inline-end
 * - block
 * - block-start
 * - block-end
 * @param {string} name Base property name
 * @returns {string[]} Array of property names
 */
function inline_block_with_start_end(name) {
	return inline_block(name).flatMap(start_end)
}

/**
 * Returns an array of all sizes for the given property name.
 * @param {string} name Base property name
 * @returns {string[]} Array of property names
 */
function all_sizes(name) {
	return [...top_right_bottom_left(name), ...inline_block_with_start_end(name)]
}

/**
 * Returns an array of property names with the following suffixes:
 * - start
 * - end
 * @param {string} name Base property name
 * @returns {string[]} Array of property names
 */
function start_end(name) {
	return ['', '-start', '-end'].map(after(name))
}

/**
 * Returns an array of property names with the following prefixes:
 * - min
 * - max
 * @param {string} name Base property name
 * @returns {string[]} Array of property names
 */
function min_max(name) {
	return ['', 'min-', 'max-'].map(before(name))
}

/**
 * Returns an array of property names with the following formats:
 * - border-{name}
 * - border-{name}-width
 * - border-{name}-style
 * - border-{name}-color
 * @param {string | undefined} [name] Base property name
 * @returns {string[]} Array of property names
 */
function border(name) {
	const infix = name !== undefined ? `-${name}` : ''
	return ['', '-width', '-style', '-color'].map(after(infix)).map(after('border'))
}

/**
 * Returns an array of property names with the following suffixes:
 * - content
 * - items
 * - self
 * @param {string} name Base property name
 * @returns {string[]} Array of property names
 */
function content_items_self(name) {
	return ['-content', '-items', '-self'].map(after(name))
}

/**
 * Returns a function that concatenates the given prefix with the provided name.
 *
 * @param {string} name - The name to concatenate with the prefix.
 * @returns {(suffix: string) => string} A function that takes a prefix and returns the concatenated string.
 */
function before(name) {
	return (prefix) => `${prefix}${name}`
}

/**
 * Returns a function that returns a string with the given suffix.
 * @param {string} name - The name to concatenate with the suffix.
 * @returns {(suffix: string) => string} A function that takes a suffix and returns the concatenated string.
 */
function after(name) {
	return (suffix) => `${name}${suffix}`
}
