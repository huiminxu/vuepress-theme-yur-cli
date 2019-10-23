module.exports = {
    base: '/',
    title: '凉风有信',
    description: '责难无以成事',
    head: [
        ['meta', {
            name: 'viewport',
            content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
        }],
        ['meta', { name: 'X-UA-Compatible', content: 'ie=edge' }],
        ['meta', { name: 'keywords', content: 'cnguu,gleehub,凉风有信,博客' }],
        ['meta', { name: 'theme-color', content: '#3c67bd' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'msapplication-TileImage', content: '/20171231/homeScreen144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        // ['meta', { name: 'google-site-verification', content: '' }],
        ['link', { rel: 'icon', href: '/20171231/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/20171231/manifest.json' }],
        ['link', { rel: 'apple-touch-icon', href: '/20171231/homeScreen144.png' }],
        // ['script', {
        //     'data-ad-client': 'ca-pub-7802529615129872',
        //     async: 1,
        //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        // }],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    evergreen: true,
    theme: 'yur',
    themeConfig: {
        site: 'https://gleehub.com',
        author: 'cnguu',
        authorLink: 'https://github.com/cnguu/',
        logo: '/20171231/logo.png',
        // banner: '/20171231/banner.png',

        //导航栏
        nav: [
            { text: '其它', link: '/other/' },
        ],
        
        // 评论：vssue or valine
        // comment: 'vssue',

        // valine配置，打开此功能需配置 comment: 'valine',
        // valine: {
        //     appId: '<API_ID>',
        //     appKey: '<API_Key>',
        //     placeholder: '在这里写下你的留言丨支持 MarkDown 语法',
        //     notify: true,
        //     verify: true,
        //     avatar: 'mp',
        //     pageSize: 8,
        //     recordIP: true,
        // },

        //百度自动推送
        baiDuAuthPush: false,
        // crisp: '',
        reward: [
            'https://static.xmt.cn/ca717dde8ae14ea7ab3c8c74b8711414.png',
            'https://static.xmt.cn/acc7d3d02b0c4a35a3735268cbb2cce0.png',
        ],
        link: {
            banner: '/20171231/summer-solstice-strawberry-moon.gif',
            blog: [
                {
                    title: '凉风有信',
                    subtitle: '责难无以成事',
                    link: 'https://gleehub.com/',
                    logo: 'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png',
                    color: '#3c67bd',
                },
              	{
                    title: '阿业战记',
                    subtitle: '提升码农亩产，掰直码农方向',
                    link: 'https://eeee.im/',
                    logo: 'https://eeee.im/avatar.jpg',
                    color: '#3c67bd',
                },
                {
                    // 继续添加
                },
            ],
        },
        //关于我配置
        about: {
            banner: '/20171231/first-day-of-spring-2016-northern-hemisphere.gif',
            avatar: 'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png',
            name: 'cnguu',
            introduction: '责难无以成事',
        },
        //页脚配置
        footer: [
            [
                {
                    title: 'Yur-cli',
                    subtitle: 'Yur主题快速搭建工具',
                    link: 'https://github.com/ioim/vuepress-theme-yur-cli',
                },
                // {
                //     继续添加
                // },
            ],
            [
                {
                    title: 'Github',
                    link: 'https://github.com/cnguu/',
                    type: 'github',
                    theme: 'filled',
                },
                {
                    // 继续添加
                },
            ],
            [
                {
                    title: 'www@cnguu.cn',
                    link: 'mailto:www@cnguu.cn',
                    type: 'mail',
                    theme: 'outlined',
                },
                {
                    // 继续添加
                },
            ],
        ],
        // cdn: {
        //     github: 'https://cdn.jsdelivr.net/gh/cnguu/pic@master',
        // },
    },
    //插件管理
    plugins: [
        // ['@vssue/vuepress-plugin-vssue', {
        //     platform: 'github',
        //     owner: '',
        //     repo: 'blog-vssue',
        //     clientId: '',
        //     clientSecret: '',
        // }],
        // ['@vuepress/google-analytics', {
        //     ga: '',
        // }],
        // ['sitemap', {
        //     hostname: 'https://gleehub.com',
        // }],
    ],
    markdown: {
        lineNumbers: true,
        anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
        toc: { includeLevel: [2, 3] },
    },
    //host: 'localhost',
    port: '2234',
    dest: 'dist',
};