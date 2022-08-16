// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'braintris 🧠',
  tagline: `Here that contain everything I've created and studied`,
  url: 'https://biantris.dev', //wip
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'biantris', // Usually your GitHub org/user name.
  projectName: 'braintris', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        articles: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        // logo: {
        //   alt: '',
        //   src: '',
        // },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Contents',
          },
          {to: '/articles', label: 'Articles', position: 'left'},
          {to: '/articles', label: 'About', position: 'left'},
          {
            href: 'https://github.com/biantris/braintris',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/biantris_',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/beatriiz-oliveiraa/',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Articles',
                to: '/articles',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/biantris/braintris',
              },
              {
                label: 'Dev.to',
                href: 'https://dev.to/beatrizoliveira',
              },
              {
                label: 'Medium',
                href: 'https://beatrizoliveiraa.medium.com/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} biantris, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
