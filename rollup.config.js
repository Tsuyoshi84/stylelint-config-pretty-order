export default {
	input: 'index.js',
	output: [
		{
			file: 'dist/index.mjs',
			format: 'es',
		},
		{
			file: 'dist/index.cjs',
			format: 'cjs',
		},
	],
}
