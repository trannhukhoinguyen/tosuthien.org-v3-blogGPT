import type { DefaultTheme } from 'vitepress';

export const chineseTheme: DefaultTheme.Config = {
  langMenuLabel: '语言',
  siteTitle: 'Where1Returns 文档',
  skipToContentLabel: '跳转到正文',
  notFound: {
    title: '页面不存在',
    quote: '这个地址没有对应的文档。',
    linkLabel: '返回首页',
    linkText: '返回首页',
  },
  nav: [
    { text: '指南', link: '/zh/guide/getting-started' },
    { text: '配置', link: '/zh/config/reference' },
    { text: 'DIY', link: '/zh/customization/hooks' },
  ],
  sidebar: [
    {
      text: '开始使用',
      items: [
        { text: '认识 Where1Returns', link: '/zh/guide/overview' },
        { text: '安装与预览', link: '/zh/guide/getting-started' },
        { text: '构建与部署', link: '/zh/guide/deployment' },
      ],
    },
    {
      text: '内容管理',
      items: [
        { text: '目录与网址', link: '/zh/content/organization' },
        { text: 'Frontmatter', link: '/zh/content/frontmatter' },
        { text: '语言版本与回退', link: '/zh/content/languages' },
        { text: '内容包与附件', link: '/zh/content/bundles' },
        { text: '分类、标签和页面', link: '/zh/content/taxonomy' },
        { text: 'Archetype 模板', link: '/zh/content/archetypes' },
      ],
    },
    {
      text: '主题配置',
      items: [
        { text: '完整配置参考', link: '/zh/config/reference' },
        { text: '站点与外观', link: '/zh/config/site' },
        { text: '导航、作者和友链', link: '/zh/config/navigation' },
        { text: '文章增强', link: '/zh/config/enhancements' },
        { text: '阅读、分享与统计', link: '/zh/config/reading' },
        { text: '交互式文章目录', link: '/zh/config/toc' },
      ],
    },
    {
      text: '扩展与维护',
      items: [
        { text: '全站 HTML / CSS / JS', link: '/zh/customization/hooks' },
        { text: '迁移现有博客', link: '/zh/guide/migration' },
        { text: '常见问题', link: '/zh/guide/faq' },
      ],
    },
  ],
  outline: { level: [2, 3], label: '本页目录' },
  docFooter: { prev: '上一页', next: '下一页' },
  sidebarMenuLabel: '菜单',
  returnToTopLabel: '返回顶部',
  darkModeSwitchLabel: '外观',
  lightModeSwitchTitle: '切换为浅色模式',
  darkModeSwitchTitle: '切换为深色模式',
  editLink: {
    pattern:
      'https://github.com/Raincarnator/Where1Returns/edit/main/apps/docs/:path',
    text: '在 GitHub 上编辑此页',
  },
  lastUpdated: {
    text: '最后更新于',
    formatOptions: {
      dateStyle: 'long',
      timeStyle: 'medium',
      forceLocale: true,
    },
  },
  footer: {
    message: 'Where1Returns · 使用文档',
    copyright:
      'Documentation released under the MIT License. Copyright © 2026 Raincarnator',
  },
};

export const chineseSearch = {
  button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
  modal: {
    noResultsText: '未找到相关内容',
    resetButtonTitle: '清除搜索',
    displayDetails: '显示详细列表',
    backButtonTitle: '关闭搜索',
    footer: {
      selectText: '选择',
      navigateText: '切换',
      closeText: '关闭',
    },
  },
};
