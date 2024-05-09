// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyVet',
  tagline: 'A caring way every day',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tqs-myvet.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/microsite/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TQS-MyVet', // Usually your GitHub org/user name.
  projectName: 'microsite', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: "Sprints",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MyVet',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Sprints', position: 'left'},
          {
            to: "https://github.com/TQS-MyVet",
            label: "GitHub",
            position: "right",
            className: "github-link",
          },
          {
            to: "https://myvet.atlassian.net/jira/software/projects/MYVET/boards/1/timeline",
            label: "Jira",
            position: "right",
            className: "jira-link",
          },
          {
            to: "https://uapt33090-my.sharepoint.com/:f:/g/personal/hf_correia_ua_pt/EkXn__neRspDgKCDCIGesOEBDUzSnVZlUPVOdF98KGZ_vQ?e=ljNAli",
            label: "Drive",
            position: "right",
            className: "drive-link",
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} MyVet, TQS`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
