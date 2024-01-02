// @ts-check
/**
 * Returns an array of property names with the following suffixes:
 * - top
 * - right
 * - bottom
 * - left
 * @param {string | undefined} [name] Base property name
 * @returns {string[]} Array of property names
 */
export function top_right_bottom_left(name) {
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
export function x_y(name) {
	return ['-x', '-y'].map(after(name))
}

/**
 * Returns an array of property names with the following suffixes:
 * - inline
 * - block
 * @param {string} name Base property name
 * @returns {string[]} Array of property names
 */
export function inline_block(name) {
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
export function x_y_inline_block(name) {
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
export function inline_block_with_start_end(name) {
	return inline_block(name).flatMap(start_end)
}

/**
 * Returns an array of all sizes for the given property name.
 * @param {string} name Base property name
 * @returns {string[]} Array of property names
 */
export function all_sizes(name) {
	return [...top_right_bottom_left(name), ...inline_block_with_start_end(name)]
}

/**
 * Returns an array of property names with the following suffixes:
 * - start
 * - end
 * @param {string} name Base property name
 * @returns {string[]} Array of property names
 */
export function start_end(name) {
	return ['', '-start', '-end'].map(after(name))
}

/**
 * Returns an array of property names with the following prefixes:
 * - min
 * - max
 * @param {string} name Base property name
 * @returns {string[]} Array of property names
 */
export function min_max(name) {
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
export function border(name) {
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
export function content_items_self(name) {
	return ['-content', '-items', '-self'].map(after(name))
}

/**
 * Returns a export function that concatenates the given prefix with the provided name.
 *
 * @param {string} name - The name to concatenate with the prefix.
 * @returns {(suffix: string) => string} A export function that takes a prefix and returns the concatenated string.
 */
export function before(name) {
	return (prefix) => `${prefix}${name}`
}

/**
 * Returns a export function that returns a string with the given suffix.
 * @param {string} name - The name to concatenate with the suffix.
 * @returns {(suffix: string) => string} A export function that takes a suffix and returns the concatenated string.
 */
export function after(name) {
	return (suffix) => `${name}${suffix}`
}
