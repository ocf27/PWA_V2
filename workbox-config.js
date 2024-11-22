module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,ico,png,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};