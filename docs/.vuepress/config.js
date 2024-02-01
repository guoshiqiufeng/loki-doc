import { defineUserConfig} from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
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
    bundler: viteBundler(),
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
                tip: '提示',
                warning: '注意',
                danger: '警告',
                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                contributors: false,
                sidebar: {
                    "/guide/": [
                        {
                            text: '指南',
                            collapsible: true,
                            children: [
                                '/guide/introduction',
                                '/guide/getting-started',
                                '/guide/install',
                                '/guide/config',
                                '/guide/annotation',
                            ]
                        }, {
                            text: '发送消息',
                            collapsible: true,
                            children: [
                                '/guide/send/introduction',
                                '/guide/send/mapper',
                            ]
                        }, {
                            text: '接收消息',
                            collapsible: true,
                            children: [
                                '/guide/listener/introduction',
                                '/guide/listener/auto',
                                '/guide/listener/non-auto',
                            ]
                        }, {
                            text: '拦截器',
                            collapsible: true,
                            children: [
                                '/guide/interceptor/introduction',
                                '/guide/interceptor/send',
                                '/guide/interceptor/listener'
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
                        //link: '/guide/',
                        children: [
                            '/guide/introduction',
                            '/guide/getting-started',
                            '/guide/install',
                            '/guide/config',
                            '/guide/annotation',
                            {
                                text: '发送消息',
                                children: [
                                    '/guide/send/introduction',
                                    '/guide/send/mapper',
                                ]
                            },
                            {
                                text: '接收消息',
                                children: [
                                    '/guide/listener/introduction',
                                    '/guide/listener/auto',
                                    '/guide/listener/non-auto',
                                ]
                            },
                            {
                                text: '拦截器',
                                children: [
                                    '/guide/interceptor/introduction',
                                    '/guide/interceptor/send',
                                    '/guide/interceptor/listener'
                                ]
                            }
                        ]
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
                notFound: [
                    'There\'s nothing here',
                    'How did we get here？',
                    'This is a 404 page',
                    'Looks like we ran into the wrong link',
                ],
                sidebar: {
                    "/en/guide/": [
                        {
                            text: 'Guide',
                            collapsible: true,
                            children: [
                                '/en/guide/introduction',
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
                                '/en/guide/send/introduction',
                                '/en/guide/send/mapper',
                            ]
                        },
                        {
                            text: 'Receive message',
                            collapsible: true,
                            children: [
                                '/en/guide/listener/introduction',
                                '/en/guide/listener/auto',
                                '/en/guide/listener/non-auto',
                            ]
                        }, {
                            text: 'Interceptor',
                            collapsible: true,
                            children: [
                                '/en/guide/interceptor/introduction',
                                '/en/guide/interceptor/send',
                                '/en/guide/interceptor/listener'
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
                        // link: '/en/guide/',
                        children: [
                            '/en/guide/introduction',
                            '/en/guide/getting-started',
                            '/en/guide/install',
                            '/en/guide/config',
                            '/en/guide/annotation',
                            {
                                text: 'Send message',
                                children: [
                                    '/en/guide/send/introduction',
                                    '/en/guide/send/mapper',
                                ]
                            },
                            {
                                text: 'Receive message',
                                children: [
                                    '/en/guide/listener/introduction',
                                    '/en/guide/listener/auto',
                                    '/en/guide/listener/non-auto',
                                ]
                            },
                            {
                                text: 'Interceptor',
                                children: [
                                    '/en/guide/interceptor/introduction',
                                    '/en/guide/interceptor/send',
                                    '/en/guide/interceptor/listener'
                                ]
                            }
                        ]
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
