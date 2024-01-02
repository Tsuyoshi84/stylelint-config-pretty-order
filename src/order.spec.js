import { expect, test } from 'bun:test'
import { order } from './order'

test('properties should be unique', () => {
	const properties = order()
	const uniqueProperties = [...new Set(properties)]

	expect(uniqueProperties).toEqual(properties)
})
