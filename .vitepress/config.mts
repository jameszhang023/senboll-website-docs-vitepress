import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // ignoreDeadLinks: true,

  title: "盛波尔科技",
  description: "产品的在线帮助",
  lastUpdated: true,
  
  base: '/', 

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo-senboll.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: '枫叶安防文档中心' }],
    ['meta', { property: 'og:site_name', content: '枫叶安防文档中心' }],
    ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://docs.senboll.com/' }]
  ],

  themeConfig: {
    logo: '/logo-senboll.png',

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
          },
          modal: {
            displayDetails: "显示详情",
            noResultsText: "未找到相关结果",
            resetButtonTitle: "清除",
            footer: {
              closeText: "关闭",
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: 'https://www.senboll.com', target: '_self' },
      { text: '文档中心', link: '/content/', target: '_self' },
      { text: '案例相册', link: 'https://photos.senboll.com/', target: '_self' }
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '基础知识',
        collapsed: false,
        base: '/content/node1/',
        items: [
          { text: '基本概念', link: 'important-knowledge/' },
          { text: '探测器须知', link: 'detector-installation-notes/' },
          // { text: '防盗锁安全性分析', link: 'lock-safety-analysis/' },
          { text: '关于信号辐射', link: 'rf-radiation/' }
        ]
      },

      {
        text: '安装调试',
        base: '/content/node2/',
        collapsed: false,
        items: [
          { text: '布线指南', link: 'wiring-method/' },
          { text: '编程设置', link: 'babyware/' },
          { text: '安装设置 - 触摸键盘', link: 'touchscreen-lable/' },
          { text: '安装设置 - 微信模块', link: 'wechat-module/' },
          { text: '安装设置 - 对接Control4', link: 'paradox-to-control4-driver/' },
          { text: '编程设置 - 手机APP', link: 'insite-gold/' },
          { text: '安装设置 - StayD模式', link: 'stayd-mode/' }
        ]
      },
      {
        text: '用户指南',
        collapsed: false,
        base: '/content/node3/',
        items: [
          { text: '手机APP(Insite Gold)使用说明', link: 'insite-gold/' },
          { text: '键盘(K10V)说明书', link: 'k10v/' },
          { text: '键盘(K32)说明书', link: 'k32/' },
          { text: '键盘(K641)说明书', link: 'k641/' },
          { text: '键盘(K646)说明书', link: 'k656/' },
          { text: '一体化主机(MG6250)使用说明', link: 'mg6250/' },
          { text: '键盘(TM50-EVO)说明书', link: 'tm50-evo/' },
          { text: '键盘(TM50-SPMG)说明书', link: 'tm50-spmg/' },
          { text: '键盘(TM70-EVO)说明书', link: 'tm70-evo/' },
          { text: '键盘(TM70-SPMG)说明书', link: 'tm70-spmg/' },
          { text: '微信端使用说明', link: 'wechat-module/' }
        ]
      },
      {
        text: '常见问题',
        collapsed: false,
        base: '/content/node4/',
        items: [
          { text: '硬件问题', link: 'hardware/' },
          { text: '软件问题', link: 'software/' }
        ]
      },
      {
        text: '其他',
        collapsed: false,
        base: '/content/node9/',
        items: [
          { text: '安防行业标准规范', link: 'standard1/' }
        ]
      },


    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: '在 GitHub 上编辑此页面'
    // },
    editLink: {
      pattern: 'https://github.com/jameszhang023/senboll-website-docs-vitepress/edit/master/:path',
      text: '在 GitHub 上编辑此页面'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: '',
      copyright: `Copyright © 1999-${new Date().getFullYear()}  Senboll`
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },

  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    lineNumbers: true,
    defaultHighlightLang: "js",
  } 
})  
