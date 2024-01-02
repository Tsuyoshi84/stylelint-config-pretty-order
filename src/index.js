// @ts-check
import { order } from './order'

export default {
	plugins: 'stylelint-order',
	rules: {
		'order/properties-order': [order(), { unspecified: 'bottomAlphabetical', severity: 'warning' }],
	},
}
