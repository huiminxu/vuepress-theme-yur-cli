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

    // 多语言
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },

    evergreen: true,

    theme: 'yur',

    themeConfig: {
        // 站点地址
        site: 'https://gleehub.com',

        // 博主名称
        author: 'cnguu',

        // 博主名称跳转链接
        authorLink: 'https://github.com/cnguu/',

        // 站点 Logo
        logo: '/20171231/logo.png',
        // banner: '/20171231/banner.png',

        // 首页按钮，type 默认：default，可选：primary dashed danger link
        bannerButtons: [
            {text: '阅读博文', link: '/posts/?page=1&pageSize=12', type: 'primary'},
            {text: '了解博主', link: '/about', type: 'default'},
        ],

        // 时间线
        timeline: true,

        //导航栏
        nav: [
            { text: '其它', link: '/other/' },
        ],
        
        // 评论：vssue or valine
        //comment: 'valine',

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

        //百度统计
        // baiDuTongJi: 'token', // https://hm.baidu.com/hm.js?token

        // 在线聊天
        // crisp: '',

        // 打赏
        reward: [
            'https://static.xmt.cn/ca717dde8ae14ea7ab3c8c74b8711414.png',
            'https://static.xmt.cn/acc7d3d02b0c4a35a3735268cbb2cce0.png',
        ],

        // 友链
        link: {
            // 封面图
            banner: '/20171231/summer-solstice-strawberry-moon.gif',
            blog: [
                {
                    title: '凉风有信',                                                                  // 站点名称
                    subtitle: '责难无以成事',                                                           // 站点描述
                    link: 'https://gleehub.com/',                                                      // 站点网址
                    logo: 'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png',                // 头像或者 Logo
                    color: '#3c67bd',                                                                  // 主题色
                },
              	{
                    title: '阿业战记',
                    subtitle: '提升码农亩产，掰直码农方向',
                    link: 'https://eeee.im/',
                    logo: 'https://eeee.im/avatar.jpg',
                    color: '#3c67bd',
                },
            ],
        },

        //关于我配置
        about: {
            banner: '/20171231/first-day-of-spring-2016-northern-hemisphere.gif',   // 封面图
            avatar: 'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png',   // 头像链接
            name: 'cnguu',                                                          // 博主名称
            introduction: '责难无以成事',                                            // 简介
        },

        //页脚配置
        footer: [
            [   // 推荐资源
                {
                    title: 'Yur Cli',
                    subtitle: 'Yur 主题快速搭建工具',
                    link: 'https://github.com/ioim/vuepress-theme-yur-cli',
                },
                // {
                //     继续添加
                // },
            ],
            [   // 相关信息
                {
                    title: 'GitHub',                        // 标题
                    link: 'https://github.com/cnguu/',      // 跳转链接
                    type: 'github',                         // 图标，这里获取：https://vue.ant.design/components/icon-cn/
                    theme: 'filled',                        // 图标类型，可选：filled（实心）丨outlined（默认：描线）丨twoTone（双色）
                },
                {
                    // 继续添加
                },
            ],
            [   // 其它
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

        // 落下帷幕
        curtain: {
            tip: '页面准备中...',   // 提示语
            textShadow: '#e91e63', // 文字阴影颜色
        },

        // 打字特效
        ityped: {
            typeSpeed: 300,           // 正常速度
            backSpeed: 100,           // 反向速度
            startDelay: 300,          // 开始延迟（毫秒）
            backDelay: 300,           // 反向延迟（毫秒）
            loop: true,               // 循环
            showCursor: true,         // 显示指针
            placeholder: false,       // 占位
            disableBackTyping: false, // 禁用反向输入
            cursorChar: '丨',         // 指针字符
        },

        // 乐动标签云
        piano: true,
        piano: '1:0-1:13-5:13-5:13-6:15-6:13-5:12-4:29-4:14-3:14-3:12-2:14-2:13-1:14-5:27-5:12-4:14-4:13-3:14-3:13-2:14-5:27-5:14-4:14-4:13-3:14-3:12-2:15-1:29-1:13-5:14-5:14-6:15-6:15-5:15-4:29-4:16-3:13-3:16-2:15-2:17-1:17',
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

    // MarkDown 扩展
    markdown: {
        lineNumbers: true,
        anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
        toc: { includeLevel: [2, 3] },
    },

    //host: 'localhost',
    port: '2234',
    dest: 'dist',
};