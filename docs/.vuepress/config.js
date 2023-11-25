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
            lang: 'en-US',
            title: 'LOKI',
            description: 'Simplifying mq usage'
        },
        '/zh/': {
            lang: '简体中文',
            title: 'LOKI',
            description: '简化消息队列使用'
        },
    },
    head: [
        ['link', {rel: 'icon', href: '/images/f.png'}],
    ],
    theme: defaultTheme({
        logo: "/images/logo.png",
        logoDark: "/images/logo-d.png",
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                sidebar: {
                    "/guide/": [
                        {
                            text: 'Guide',
                            children: [
                                '/guide/',
                                '/guide/getting-started',
                            ]
                        }
                    ],
                    "/config/": [
                        {
                            text: 'Config',
                            children: [
                                '/config/',
                            ]
                        }
                    ],
                },
                navbar: [
                    {
                        text: 'Guide',
                        link: '/guide/',
                    },
                    {
                        text: 'Config',
                        link: '/config/',
                    },
                    {
                        text: 'Changelog',
                        link: 'https://github.com/guoshiqiufeng/loki/releases',
                    }
                ]
            },
            '/zh/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                sidebar: {
                    "/zh/guide/": [
                        {
                            text: '指南',
                            children: [
                                '/zh/guide/',
                                '/zh/guide/getting-started'
                            ]
                        }
                    ],
                    "/zh/config/": [
                        {
                            text: '配置',
                            children: [
                                '/zh/config/',
                            ]
                        }
                    ]
                },
                navbar: [
                    {
                        text: '指南',
                        link: '/zh/guide/',
                    },
                    {
                        text: '配置',
                        link: '/zh/config/',
                    },
                    {
                        text: '更新日志',
                        link: 'https://github.com/guoshiqiufeng/loki/releases',
                    }
                ]
            }
        },
        repo: "https://github.com/guoshiqiufeng/loki"
    })
})