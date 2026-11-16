import { defineConfig } from 'vitepress';
import { stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { englishTheme, englishSearch } from './english';
import { chineseTheme, chineseSearch } from './chinese';
import { DEFAULT_LOCALE } from '../../../src/i18n/i18n.config';
export default defineConfig({
  lang: 'vi-VN',
  title: 'Where1Returns',
  description: 'Tài liệu astro-theme-Where1Returns',
  base: process.env.DOCS_BASE ?? '/',
  cleanUrls: true,
  appearance: true,
  lastUpdated: true,
  async transformPageData(page, { siteConfig }) {
    // Git supplies publication history; source archives still have file mtimes.
    if (
      !page.lastUpdated &&
      page.frontmatter.lastUpdated !== false &&
      page.frontmatter.layout !== 'home'
    ) {
      page.lastUpdated = (
        await stat(resolve(siteConfig.srcDir, page.filePath))
      ).mtimeMs;
    }
  },
  locales: {
    root: { label: 'Tiếng Việt', lang: 'vi-VN', link: '/' },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'astro-theme-Where1Returns documentation',
      themeConfig: englishTheme,
    },
    zh: {
      label: '中文',
      lang: "zh-CN'",
      link: '/zh/',
      description: 'astro-theme-Where1Returns documentation',
      themeConfig: chineseTheme,
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `${(process.env.DOCS_BASE ?? '/').replace(/\/$/, '')}/logo.svg`,
      },
    ],
  ],
  themeConfig: {
    langMenuLabel: 'Ngôn ngữ',
    logo: '/logo.svg',
    siteTitle: 'Tài liệu Where1Returns',
    skipToContentLabel: 'Chuyển đến nội dung chính',
    notFound: {
      title: 'Không tìm thấy trang',
      quote: 'Không có tài liệu nào tương ứng với địa chỉ này.',
      linkLabel: 'Quay lại trang chủ',
      linkText: 'Quay lại trang chủ',
    },
    nav: [
      { text: 'Hướng dẫn', link: '/guide/getting-started' },
      { text: 'Cấu hình', link: '/config/reference' },
      { text: 'Tùy chỉnh (DIY)', link: '/customization/hooks' },
    ],
    sidebar: [
  {
    text: 'Bắt ​​đầu',
    items: [
      { text: 'Giới thiệu về Where1Returns', link: '/guide/overview' },
      { text: 'Cài đặt & Xem trước', link: '/guide/getting-started' },
      { text: 'Xây dựng & Triển khai', link: '/guide/deployment' },
    ],
  },
  {
    text: 'Quản lý nội dung',
    items: [
      { text: 'Thư mục & URL', link: '/content/organization' },
      { text: 'Frontmatter', link: '/content/frontmatter' },
      { text: 'Ngôn ngữ & Dự phòng', link: '/content/languages' },
      { text: 'Gói nội dung & Tệp đính kèm', link: '/content/bundles' },
      { text: 'Phân loại, Thẻ & Trang', link: '/content/taxonomy' },
      { text: 'Mẫu Archetype', link: '/content/archetypes' },
    ],
  },
  {
    text: 'Cấu hình giao diện',
    items: [
      { text: 'Tham khảo cấu hình đầy đủ', link: '/config/reference' },
      { text: 'Trang web & Giao diện', link: '/config/site' },
      { text: 'Điều hướng, Tác giả & Liên kết', link: '/config/navigation' },
      { text: 'Cải tiến bài viết', link: '/config/enhancements' },
      { text: 'Đọc, Chia sẻ & Phân tích', link: '/config/reading' },
      { text: 'Mục lục tương tác', link: '/config/toc' },
    ],
  },
  {
    text: 'Mở rộng & Bảo trì',
    items: [
      { text: 'HTML / CSS / JS toàn trang', link: '/customization/hooks' },
      { text: 'Chuyển đổi blog hiện có', link: '/guide/migration' },
      { text: 'Câu hỏi thường gặp (FAQ)', link: '/guide/faq' },
    ],
  },
],
    search: {
      provider: 'local',
      options: {
        locales: {
          en: { translations: englishSearch },
          zh: { translations: chineseSearch },
        },
        miniSearch: {
          options: {
            tokenize: (text) =>
              [
                ...new Intl.Segmenter(DEFAULT_LOCALE, {
                  granularity: 'word',
                }).segment(text),
              ]
                .filter((part) => part.isWordLike)
                .map((part) => part.segment),
          },
        },
        translations: {
          button: { buttonText: 'Tìm kiếm tài liệu', buttonAriaLabel: 'Tìm kiếm tài liệu' },
          modal: {
            noResultsText: 'Không tìm thấy kết quả',
              resetButtonTitle: 'Xóa tìm kiếm',
              displayDetails: 'Hiển thị danh sách chi tiết',
              backButtonTitle: 'Đóng tìm kiếm',
              footer: {
              selectText: 'chọn',
                navigateText: 'điều hướng',
                closeText: 'đóng',
            },
          },
        },
      },
    },
    outline: { level: [2, 3], label: 'Trên trang này' },
    docFooter: { prev: 'Trang trước', next: 'Trang sau' },
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Quay lại đầu trang',
    darkModeSwitchLabel: 'Giao diện',
    lightModeSwitchTitle: 'Chuyển sang giao diện sáng',
    darkModeSwitchTitle: 'Chuyển sang giao diện tối',
    editLink: {
      pattern: 'https://github.com/Raincarnator/Where1Returns/edit/main/apps/docs/:path',
      text: 'Chỉnh sửa trang này trên GitHub',
    },
    lastUpdated: {
      text: 'Cập nhật lần cuối vào',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'medium',
        forceLocale: true,
      },
    },
    footer: {
      message: 'Where1Returns · Tài liệu',
      copyright:
      'Tài liệu được phát hành theo Giấy phép MIT. Bản quyền © 2026 Raincarnator',
    },
  },
});
