({
	baseUrl: '../',
	mainConfigFile: '../main.js',
	name: 'main',
	out: 'concatenated-modules.js',
	optimize: 'uglify2',
	preserveLicenseComments: false,
	generateSourceMaps: true,
	useSourceUrl: true,
	paths: {
		requireLib: 'libs/require'
	},
	include: 'requireLib'

})
