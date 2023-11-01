// @ts-check

/**
 * @param {string | undefined} [name]
 * @returns {string[]}
 */
function top_right_bottom_left(name) {
	const _prefix = name !== undefined ? `${name}-` : ''

	return [
		name ?? [],
		`${_prefix}top`,
		`${_prefix}right`,
		`${_prefix}bottom`,
		`${_prefix}left`,
	].flat()
}

/**
 * @param {string | undefined} [name]
 * @returns {string[]}
 */
function block_inline(name) {
	const _prefix = name !== undefined ? `${name}-` : ''

	return [
		`${_prefix}block`,
		`${_prefix}block-start`,
		`${_prefix}block-end`,
		`${_prefix}inline`,
		`${_prefix}inline-start`,
		`${_prefix}inline-end`,
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
	const _infix = name !== undefined ? `-${name}` : ''

	return [
		`border${_infix}`,
		`border${_infix}-width`,
		`border${_infix}-style`,
		`border${_infix}-color`,
		`border${_infix}-radius`,
	]
}

const order = [
	'composes',
	'all',

	// positioning
	'position',
	'z-index',
	top_right_bottom_left(),
	'inset',
	start_end('inset-block'),
	start_end('inset-inline'),

	// display
	'display',
	'opacity',
	'visibility',
	'content',

	// flex / grid
	'flex',
	'flex-basis',
	'flex-direction',
	'flex-flow',
	'flex-grow',
	'flex-shrink',
	'flex-wrap',
	'grid',
	'grid-area',
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
	'align-content',
	'align-items',
	'align-self',
	'place-content',
	'place-items',
	'place-self',
	'justify-content',
	'justify-items',
	'justify-self',
	'order',
	'gap',
	'column-gap',
	'row-gap',

	// size
	size_with_min_max('width'),
	size_with_min_max('inline-size'),
	size_with_min_max('height'),
	size_with_min_max('block-size'),
	'aspect-ratio',
	'box-sizing',

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
	'border-start-start-radius',
	'border-start-end-radius',
	'border-end-start-radius',
	'border-end-end-radius',
	'border-image',
	'border-image-outset',
	'border-image-repeat',
	'border-image-slice',
	'border-image-source',
	'border-image-width',
	'border-collapse',
	'border-spacing',
	'box-shadow',

	// outline
	'outline',
	'outline-color',
	'outline-offset',
	'outline-style',
	'outline-width',

	// flow control
	'overflow',
	'overflow-x',
	'overflow-y',
	'float',
	'clear',

	// font
	'color',
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
	'text-align',
	'text-align-last',
	'text-decoration',
	'text-decoration-color',
	'text-decoration-line',
	'text-decoration-style',
	'text-indent',
	'text-justify',
	'text-shadow',
	'text-overflow',
	'text-rendering',
	'text-size-adjust',
	'text-transform',
	'text-underline-position',
	'text-emphasis',
	'text-emphasis-color',
	'text-emphasis-position',
	'text-emphasis-style',
	'text-combine-upright',
	'text-orientation',
	'text-overflow',
	'white-space',
	'word-spacing',
	'word-wrap',
	'word-break',
	'overflow-wrap',
	'tab-size',
	'hyphens',

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
	'background-size',
	'background-repeat',

	// mask
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

	// transform
	'translate',
	'rotate',
	'scale',
	'transform',
	'transform-origin',
	'transform-style',
	'transform-box',

	// animation / transition
	'animation',
	'animation-delay',
	'animation-direction',
	'animation-duration',
	'animation-fill-mode',
	'animation-iteration-count',
	'animation-name',
	'animation-play-state',
	'transition',
	'transition-delay',
	'transition-duration',
	'transition-property',
	'transition-timing-function',
].flat()

module.exports = {
	plugins: 'stylelint-order',
	rules: {
		'order/properties-order': [order, { unspecified: 'bottomAlphabetical', severity: 'warning' }],
	},
}
