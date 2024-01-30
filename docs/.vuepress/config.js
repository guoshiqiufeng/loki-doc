import { defineUserConfig} from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
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
        ['link', {rel: 'icon', href: '/loki-doc/images/f.ico'}],
        ['link', {rel: 'shortcut icon', href: '/loki-doc/images/f.ico'}]
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
                lastUpdated: true,
                lastUpdatedText: '上次更新',
                contributors: false,
                sidebar: {
                    "/guide/": [
                        {
                            text: '指南',
                            collapsible: true,
                            children: [
                                '/guide/',
                                '/guide/getting-started',
                                '/guide/install',
                                '/guide/config',
                                '/guide/annotation',
                            ]
                        }, {
                            text: '发送消息',
                            collapsible: true,
                            children: [
                                '/guide/send/',
                                '/guide/send/mapper',
                            ]
                        }, {
                            text: '接收消息',
                            collapsible: true,
                            children: [
                                '/guide/listener/',
                                '/guide/listener/auto',
                                '/guide/listener/non-auto',
                            ]
                        }
                    ],
                    // "/config/": [
                    //     {
                    //         text: '配置',
                    //         children: [
                    //             '/config/',
                    //         ]
                    //     }
                    // ]
                },
                navbar: [
                    {
                        text: '指南',
                        link: '/guide/',
                    },
                    // {
                    //     text: '配置',
                    //     link: '/config/',
                    // },
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
                lastUpdated: true,
                lastUpdatedText: 'Last Updated',
                contributors: false,
                sidebar: {
                    "/en/guide/": [
                        {
                            text: 'Guide',
                            collapsible: true,
                            children: [
                                '/en/guide/',
                                '/en/guide/getting-started',
                                '/en/guide/install',
                                '/en/guide/config',
                                '/en/guide/annotation',
                            ]
                        },
                        {
                            text: 'Send message',
                            collapsible: true,
                            children: [
                                '/en/guide/send/',
                                '/en/guide/send/mapper',
                            ]
                        },
                        {
                            text: 'Receive message',
                            collapsible: true,
                            children: [
                                '/en/guide/listener/',
                                '/en/guide/listener/auto',
                                '/en/guide/listener/non-auto',
                            ]
                        }
                    ],
                    // "/en/config/": [
                    //     {
                    //         text: 'Config',
                    //         children: [
                    //             '/en/config/',
                    //         ]
                    //     }
                    // ],
                },
                navbar: [
                    {
                        text: 'Guide',
                        link: '/en/guide/',
                    },
                    // {
                    //     text: 'Config',
                    //     link: '/en/config/',
                    // },
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
