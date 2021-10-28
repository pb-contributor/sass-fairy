/* eslint-disable tsdoc/syntax */
// ================================================================= //
// Main Settings                                                     //
// ================================================================= //

/**
 * @type {import('@docusaurus/types').DocusaurusConfig}
 */
const config = {
	title: 'Sass Fairy',
	tagline: 'A collection modern Sass utilities',
	url: 'https://sass-fairy.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'roydukkey',
	projectName: 'sass-fairy'
};


const repoUrl = `https://github.com/${config.organizationName}/${config.projectName}`;


// ================================================================= //
// Theme Settings                                                    //
// ================================================================= //

/**
 * @type {import('@docusaurus/preset-classic').ThemeConfig}
 */
config.themeConfig = {

	colorMode: {
		defaultMode: 'dark',
		disableSwitch: true
	},

	navbar: {
		style: 'dark',

		title: 'Sass Fairy',
		// logo: {
		// 	alt: 'My Site Logo',
		// 	src: 'img/logo.svg'
		// },
		items: [
			{
				type: 'doc',
				docId: 'docs/intro',
				position: 'left',
				label: 'Docs'
			},
			{
				type: 'doc',
				docId: 'api/overview',
				position: 'left',
				label: 'API'
			},
			{
				href: repoUrl,
				className: 'header-github-link',
				'aria-label': 'GitHub repository',
				position: 'right'
			}
		]
	},

	footer: {
		style: 'dark',
		copyright: `Copyright © ${new Date().getFullYear()} roydukkey. Built with Docusaurus.`
	},

	prism: {
		theme: {
			plain: {
				color: '#dee0e3',
				backgroundColor: '#1e1f29'
			},
			// Use stylesheet instead of `styles` configuration
			styles: []
		},
		additionalLanguages: [
			'scss',
			'sass'
		]
	}

};


// ================================================================= //
// Presets                                                           //
// ================================================================= //

config.presets = [

	[
		'@docusaurus/preset-classic',

		/**
		 * @type {import('@docusaurus/preset-classic').Options}
		 */
		{
			docs: {
				routeBasePath: '/',
				sidebarPath: require.resolve('./sidebars.js'),
				editUrl: `${repoUrl}/edit/master/website`,
				sidebarItemsGenerator: require('./sidebars.sort.js')
			},

			theme: {
				customCss: require.resolve('./src/css/custom.sass')
			}
		}
	]

];


// ================================================================= //
// Plugins                                                           //
// ================================================================= //

config.plugins = [
	'docusaurus-plugin-sass'
];


module.exports = config;
