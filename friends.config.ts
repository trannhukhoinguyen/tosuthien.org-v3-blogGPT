import type { FriendsConfig } from '@/types/config.ts';

/** Ordered friend groups. Page headings and introductory text live in content/pages/links/. */
const friends: FriendsConfig = [
  {
    title: {
      vi: 'Các trang web mẫu',
      zh: '示例站点',
      en: 'Example sites',
    },
    description: {
      vi: 'Các ví dụ giả định với URL tạm thời là example.com.',
      zh: '以下站点均为虚构样本，网址使用 example.com 占位。',
      en: 'Fictional samples with example.com placeholder URLs.',
    },
    links: [
      {
        name: 'Alpha Studio',
        description: {
          vi: 'Một trang web giả định dùng để giới thiệu các sản phẩm/dự án.',
          zh: '一个展示作品集的虚构站点。',
          en: 'A fictional portfolio site.',
        },
        url: 'https://example.com/alpha',
        avatar: '/images/covers/muon-phap-ve-mot-mot-ve-dau.avif',
      },
      {
        name: 'Beta Journal',
        description: {
          vi: 'Một trang web giả định dành cho các bài viết chuyên sâu.',
          zh: '一个用于展示长文阅读的虚构站点。',
          en: 'A fictional long-form journal.',
        },
        url: 'https://example.com/beta',
        avatar: '/images/illustrations/blue-flow.webp',
      },
      {
        name: 'Gamma Notes',
        description: {
          vi: 'Bộ sưu tập hư cấu về các ghi chú tri ​​thức',
          zh: '一个用于整理知识卡片的虚构站点。',
          en: 'A fictional collection of knowledge notes.',
        },
        url: 'https://example.com/gamma',
        avatar: '/images/covers/muon-phap-ve-mot-mot-ve-dau.avif',
      },
    ],
  },
  {
    title: {
      vi: 'Trợ giúp về chủ đề',
      zh: '主题帮助',
      en: 'Theme help',
    },
    description: {
      vi: 'Mã nguồn giao diện, hướng dẫn sử dụng và tài liệu kỹ thuật để xây dựng blog.',
      zh: '主题源码、使用指南与构建博客时常用的技术文档。',
      en: 'Theme source, usage guides and technical references for building a blog.',
    },
    links: [
      {
        name: {
          vi: 'GitHub ',
          zh: 'Where1Returns GitHub 仓库',
          en: 'Where1Returns GitHub repository',
        },
        description: {
          vi: 'Mã nguồn giao diện, báo cáo lỗi và đóng góp từ cộng đồng.',
          zh: '主题源码、问题反馈与社区贡献。',
          en: 'Theme source, issue reports and community contributions.',
        },
        url: 'https://github.com/Raincarnator/Where1Returns',
        avatar: '/favicon.svg',
      },
      {
        name: {
          vi: 'Tài liệu Where1Returns',
          zh: 'Where1Returns 文档',
          en: 'Where1Returns documentation',
        },
        description: {
          vi: 'Hướng dẫn đầy đủ về cấu hình, viết và triển khai.',
          zh: '配置、写作与部署的完整说明。',
          en: 'Complete configuration, writing and deployment guides.',
        },
        url: 'https:/tosuthien.org',
        avatar: '/favicon.svg',
      },
      {
        name: {
          vi: 'Tài liệu Astro',
          zh: 'Astro 文档',
          en: 'Astro documentation',
        },
        description: {
          vi: 'Tài liệu Astro chính thức.',
          zh: 'Astro 官方文档。',
          en: 'Official Astro documentation.',
        },
        url: 'https://docs.astro.build/',
        avatar: '/images/friends/astro.png',
      },
      {
        name: 'MDN',
        description: {
          vi: 'Tài liệu về web mở.',
          zh: '开放网页技术文档。',
          en: 'Documentation for the open web.',
        },
        url: 'https://developer.mozilla.org/',
        avatar: '/images/friends/mdn.png',
      },
    ],
  },
  {
    title: {
      vi: 'Tài nguyên',
      zh: '图标资源',
      en: 'Icon resources',
    },
    description: {
      vi: 'Các thư viện biểu tượng được dự án này sử dụng cho các thành phần điều khiển giao diện và các thương hiệu mạng xã hội.',
      zh: '本项目使用的图标库，分别提供界面操作图标与社交平台标识。',
      en: 'The icon libraries used by this project for interface controls and social brands.',
    },
    links: [
      {
        name: 'Lucide',
        description: {
          vi: 'Thư viện biểu tượng giao diện được sử dụng bởi chủ đề này.',
          zh: '主题使用的界面图标库。',
          en: 'The interface icon library used by the theme.',
        },
        url: 'https://lucide.dev/',
        avatar: '/images/friends/lucide.svg',
      },
      {
        name: 'Simple Icons',
        description: {
          vi: 'Các thư viện biểu tượng được dự án này sử dụng cho các thành phần giao diện và thương hiệu mạng xã hội.',
          zh: '社交与分享按钮使用的品牌图标库。',
          en: 'Brand icons for social and sharing buttons.',
        },
        url: 'https://simpleicons.org/',
        avatar: '/images/friends/simple-icons.svg',
      },
    ],
  },
  {
    title: {
      vi: 'Nguồn cảm hứng cho giao diện',
      zh: '参考博客',
      en: 'Theme inspirations',
    },
    description: {
      vi: 'Where1Returns đã tham khảo các chủ đề blog sau đây trong quá trình thiết kế và phát triển.',
      zh: 'Where1Returns 在设计和构建时参考了以下博客主题。',
      en: 'Where1Returns referenced the following blog themes during its design and development.',
    },
    links: [
      {
        name: 'Stack',
        description: {
          vi: 'Một chủ đề blog dựa trên phong cách thẻ (card-based) dành cho Hugo',
          zh: 'Hugo 的卡片式博客主题。',
          en: 'A card-based blog theme for Hugo.',
        },
        url: 'https://stack.cai.im/',
        avatar: '/images/friends/stack.png',
      },
      {
        name: 'Fuwari',
        description: {
          vi: 'Một chủ đề blog với thiết kế gọn gàng và tươi sáng dành cho Astro.',
          zh: '简洁明亮的 Astro 博客主题。',
          en: 'A clean and bright blog theme for Astro.',
        },
        url: 'https://fuwari.vercel.app/',
        avatar: '/images/friends/fuwari.png',
      },
      {
        name: 'AstroPaper',
        description: {
          vi: 'Một giao diện Astro tập trung vào khả năng truy cập và trải nghiệm đọc.',
          zh: '注重可访问性与阅读体验的 Astro 主题。',
          en: 'An Astro theme focused on accessibility and reading.',
        },
        url: 'https://astro-paper.pages.dev/',
        avatar: '/images/friends/astropaper-author.png',
      },
    ],
  },
];

export default friends;
