// @ts-check

import {
	all_sizes,
	border,
	content_items_self,
	inline_block,
	min_max,
	start_end,
	top_right_bottom_left,
	x_y_inline_block,
} from './util.js'

/**
 * @returns {string[]} Array of property names
 */
export function order() {
	return [
		'all',
		position(),
		layout(),
		render(),
		overflow_scroll(),
		typography(),
		appearance(),
		transform_animation(),
		misc(),
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

		// anchor
		'anchor-name',
		'position-anchor',
		'position-try-options',
		'position-visibility',
		'inset-area',

		// flow control
		'float',
		'clear',
	].flat()
}

function layout() {
	return [
		// box
		'display',
		'box-sizing',

		// container
		'container',
		'container-name',
		'container-type',

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
		'border-image-source',
		'border-image-slice',
		'border-image-width',
		'border-image-outset',
		'border-image-repeat',
		'border-spacing',

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

		// table
		'table-layout',
		'caption-side',
		'empty-cells',
		'border-collapse',

		// column
		'columns',
		'column-count',
		'column-fill',
		'column-rule',
		'column-rule-color',
		'column-rule-style',
		'column-rule-width',
		'column-span',
		'column-width',
		'orphans',
		'widows',
	].flat()
}

function render() {
	return [
		// content visibility
		'content-visibility',

		// contain
		'contain',
		'contain-intrinsic-size',
		'contain-intrinsic-width',
		'contain-intrinsic-height',
		'contain-intrinsic-inline-size',
		'contain-intrinsic-block-size',
	]
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
		'box-shadow',
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

function transform_animation() {
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
		'timeline-scope',

		// offset
		'offset',
		'offset-anchor',
		'offset-distance',
		'offset-path',
		'offset-position',
		'offset-rotate',
	]
}

function misc() {
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
