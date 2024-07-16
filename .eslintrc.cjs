module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		node: true,
		es2021: true,
	},
	plugins: ['@typescript-eslint', 'simple-import-sort'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	rules: {
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
	},
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: './tsconfig.json',
			},
		},
	},
}
