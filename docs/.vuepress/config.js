import {defaultTheme, defineUserConfig} from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'loki',
    description: 'loki-doc',
    base: '/loki-doc/',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: 'LOKI',
            description: '简化消息队列使用'
        },
        '/en/': {
            lang: 'en-US',
            title: 'LOKI',
            description: 'Simplifying mq usage'
        }
    },
    head: [
        ['link', {rel: 'icon', href: '/images/f.png'}],
    ],
    theme: defaultTheme({
        logo: "/images/logo.png",
        logoDark: "/images/logo-d.png",
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                selectLanguageName: '简体中文',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                sidebar: {
                    "/guide/": [
                        {
                            text: '指南',
                            children: [
                                '/guide/',
                                '/guide/getting-started'
                            ]
                        }
                    ],
                    "/config/": [
                        {
                            text: '配置',
                            children: [
                                '/config/',
                            ]
                        }
                    ]
                },
                navbar: [
                    {
                        text: '指南',
                        link: '/guide/',
                    },
                    {
                        text: '配置',
                        link: '/config/',
                    },
                    {
                        text: '更新日志',
                        link: 'https://github.com/guoshiqiufeng/loki/releases',
                    }
                ]
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                selectLanguageName: 'English',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                sidebar: {
                    "/en/guide/": [
                        {
                            text: 'Guide',
                            children: [
                                '/en/guide/',
                                '/en/guide/getting-started',
                            ]
                        }
                    ],
                    "/en/config/": [
                        {
                            text: 'Config',
                            children: [
                                '/en/config/',
                            ]
                        }
                    ],
                },
                navbar: [
                    {
                        text: 'Guide',
                        link: '/en/guide/',
                    },
                    {
                        text: 'Config',
                        link: '/en/config/',
                    },
                    {
                        text: 'Changelog',
                        link: 'https://github.com/guoshiqiufeng/loki/releases',
                    }
                ]
            },
        },
        repo: "https://github.com/guoshiqiufeng/loki"
    })
})