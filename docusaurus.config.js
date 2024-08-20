// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Centurion Creative Connect', tagline: 'Creators of VR Airsoft game field', favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://centurion-creative-connect.github.io', // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'centurion-creative-connect', // Usually your GitHub org/user name.
    projectName: 'centurion-creative-connect.github.io', // Usually your repo name.

    trailingSlash: true, noIndex: true,

    onBrokenLinks: 'warn', onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'ja', locales: ['ja'],
    },

    presets: [['classic', /** @type {import('@docusaurus/preset-classic').Options} */
        ({
            docs: false, blog: {
                showReadingTime: true,
            }, theme: {
                customCss: './src/css/custom.css',
            },
        }),],],

    themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/ccc-social-card.jpg', navbar: {
                title: 'Centurion Creative Connect', logo: {
                    alt: 'Centurion Creative Connect Logo', src: 'img/logo.svg', srcDark: 'img/logo_dark.svg'
                }, items: [{
                    to: '/', label: 'Home', position: 'left', activeBaseRegex: '^/$',
                }, {to: '/regulation', label: 'Regulation', position: 'left'}, {
                    to: '/gallery', label: 'Gallery', position: 'left'
                }, {to: '/credits', label: 'Staff & Credits', position: 'left'}, {
                    to: '/access', label: 'Access', position: 'left'
                }, {to: '/faq', label: 'FAQ', position: 'left'}, {
                    to: '/blog', label: 'Blog', position: 'left'
                }, {
                    href: 'https://www.youtube.com/channel/UC7IM88tUXpViibgt24pN0oA',
                    position: 'right',
                    className: 'icon icon-youtube'
                }, {href: 'https://twitter.com/VRSGF_Centurion', position: 'right', className: 'icon icon-x'}],
            }, footer: {
                style: 'dark',
                links: [{
                    title: 'Docs', items: [{
                        label: 'System', href: 'https://system.centurioncc.org/',
                    }, {
                        label: 'System.Commands', href: 'https://commands.system.centurioncc.org'
                    }, {
                        label: 'System.VoiceCommsIntegration',
                        href: 'https://vci.system.centurioncc.org/'
                    },],
                }, {
                    title: 'Community', items: [{
                        label: 'VRChat Group',
                        href: 'https://vrchat.com/home/group/grp_26d328bc-e262-4668-935f-00af0e2e680c'
                    }, {
                        label: 'Discord', href: 'https://discord.com/invite/y66JZ4kAp8',
                    },],
                }, {
                    title: 'SNS', items: [{
                        label: 'Twitter(X)', href: 'https://twitter.com/VRSGF_Centurion',
                    }, {
                        label: 'Bluesky', href: 'https://bsky.app/profile/vrsgf-centurion.bsky.social'
                    },],
                }, {
                    title: 'More', items: [{
                        label: 'Blog', href: '/blog/',
                    }, {
                        label: 'Booth', href: 'https://cccofficialshop.booth.pm/'
                    }, {
                        label: 'GitHub', href: 'https://github.com/centurion-creative-connect/',
                    }, {
                        label: 'Shooting Range',
                        href: 'https://vrchat.com/home/world/wrld_a7ad59a4-38b4-4413-aab4-848a38d6fb48'
                    },],
                },],
                copyright: `Copyright © ${new Date().getFullYear()} Centurion Creative Connect. Built with Docusaurus.`,
            }, prism: {
                theme: prismThemes.github, darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
