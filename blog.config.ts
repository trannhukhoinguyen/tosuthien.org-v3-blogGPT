import type { BlogConfig } from '@/types/config.ts';
import languages, { DEFAULT_LOCALE } from '@/i18n/i18n.config.ts';

/** Frequent identity, copy and content settings come first; optional services follow reading defaults. */
const config: BlogConfig = {
  site: {
    title: 'Where1Returns',
    baseUrl: 'https://tosuthien.org/', // Include the deployment directory, e.g. https://.../blog/.
    defaultLocale: DEFAULT_LOCALE,
    locales: Object.keys(languages),
    localePrefixPolicy: 'redirect-to-default', // Recommended: unprefixed pages refresh directly to the default language.
    timezone: 'Asia/Ho_Chi_Minh',
  },
  author: {
    name: 'Where1Returns',
    bio: {
      vi: 'Muôn pháp về một, một về đâu?',
      zh: '万法归一，一归何处？',
      en: 'All Phenomena Return To The One, Where Does One Return To?',
    },
    avatar: '/images/avatar-enso-1.jpg',
    socials: [
      {
        label: 'THAM TỔ SƯ THIỀN',
        description:
          'pháp thoại của Hòa thượng Thiền sư Thích Duy Lực, trình bày về đường lối thực hành Tham Tổ Sư Thiền (Tham Thoại Đầu), giúp người hữu duyên nắm rõ phương pháp tu tập và tự mình thể nghiệm.',
        icon: 'simple-icons:youtube',
        href: 'https://www.youtube.com/@thamtosuthien000',
      },
      {
        label: 'Tổ Sư Thiền',
        description:
          'Thiền Tông là một tông phái về thiền tối thượng thừa hay còn gọi là Tổ sư thiền, thiền trực tiếp, thiền đốn ngộ, Bồ Đề Đạt Ma thiền... khác với các thứ thiền của Giáo môn và ngoại đạo. Thiền này truyền từ Phật Thích Ca xuống đời thứ nhất là Ma Ha Ca Diếp sau khi Phật đưa cành hoa lên mà không nói gì, chỉ ngài Ca Diếp mỉm cười tỏ ngộ nên gọi là Niêm Hoa Vi Tiếu. Từ đó về sau, 33 đời Tổ sư truyền xuống đến Lục Tổ Huệ Năng thì ngưng truyền Y bát, nhưng vẫn truyền pháp cho tới ngày nay.',
        icon: 'simple-icons:youtube',
        href: 'https://www.youtube.com/@t%E1%BB%95s%C6%B0thi%E1%BB%81n',
      },
      {
        label: 'Thích Đồng Thường',
        description:
          'Pháp thoại Tổ Sư Thiền được giảng bởi HT. Thích Đồng Thường',
        icon: 'simple-icons:youtube',
        href: 'https://www.youtube.com/@thichongthuong3142',
      },
      {
        label: 'Tổ Sư Thiền Hà Nội',
        description: 'Audio về Tổ Sư Thiền của nhóm Tổ Sư Thiền Hà Nội',
        icon: 'simple-icons:youtube',
        href: 'https://www.youtube.com/@tosuthienhanoi',
      },
    ],
  },
  text: {
    siteDescription: {
      vi: 'Muôn pháp về một, một về đâu?',
      zh: '万法归一，一归何处？',
      en: 'All Phenomena Return To The One, Where Does One Return To?',
    },
    tabs: {
      search: {
        vi: 'Đọc',
        zh: '阅读',
        en: 'Read',
      },
      posts: {
        vi: 'Bài viết',
        zh: '文章',
        en: 'Articles',
      },
    },
    homeHeading: {
      vi: 'Bạn muốn đọc gì hôm nay?',
      zh: '今天想读点什么？',
      en: 'What would you like to read today?',
    },
    searchHeading: {
      vi: 'Nhập từ khóa để tìm bài viết',
      zh: '输入关键词，发现一篇文章',
      en: 'Enter keywords to discover an article',
    },
    searchPlaceholder: {
      vi: 'Tìm kiếm bài viết, ý tưởng và từ khóa',
      zh: '搜索文章、想法与关键词',
      en: 'Search articles, ideas and keywords',
    },
    notFoundMessage: {
      vi: 'Trang này chưa có bài viết nào.',
      zh: '这一页，还没有写下故事。',
      en: 'This page has no story yet.',
    },
    footerDescription: {
      vi: 'Muôn pháp về một, một về đâu?',
      zh: '万法归一，一归何处？',
      en: 'All Phenomena Return To The One, Where Does One Return To?',
    },
  },
  posts: {
    perPage: 5,
    homeLimit: 4,
    menuLimit: 12, // Plus-menu articles; use 99999 to include all.
    randomLimit: 12, // Independent candidate count for the random button and /random.
    pathPrefix: '', // Optional date directory, e.g. [year]/ or [year]/[month]/.
    dateFormat: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    showDraftsInDev: true,
    showAudio: false,
  },
  sidebar: {
    items: [
      {
        id: 'home',
        type: 'builtin',
        route: 'home',
        label: {
          vi: 'Trang chủ',
          zh: '首页',
          en: 'Home',
        },
        icon: 'square-pen',
      },
      {
        id: 'posts',
        type: 'builtin',
        route: 'posts',
        page: 'posts',
        label: {
          vi: 'Bài viết',
          zh: '文章',
          en: 'Articles',
        },
        icon: 'files',
      },
      {
        id: 'categories',
        type: 'builtin',
        route: 'categories',
        page: 'categories',
        label: {
          vi: 'Thể loại',
          zh: '分类',
          en: 'Categories',
        },
        icon: 'shapes',
      },
      {
        id: 'archives',
        type: 'builtin',
        route: 'archives',
        page: 'archives',
        label: {
          vi: 'Lưu trữ',
          zh: '归档',
          en: 'Archives',
        },
        icon: 'archive',
      },
      {
        id: 'links',
        type: 'builtin',
        route: 'links',
        page: 'links',
        label: {
          vi: 'Nguồn tham khảo',
          zh: '友链',
          en: 'References',
        },
        icon: 'link',
      },
      {
        id: 'about',
        type: 'page',
        page: 'about',
        label: {
          vi: 'Giới thiệu',
          zh: '关于',
          en: 'About',
        },
        icon: 'info',
      },
      /*      {
        id: 'theme-github',
        type: 'external',
        href: 'https://github.com/Raincarnator/Where1Returns',
        newTab: true,
        label: {
          vi: 'Github',
          zh: 'Github 仓库',
          en: 'Github repository',
        },
        icon: 'simple-icons:github',
      },*/
      /*      {
        id: 'docs',
        type: 'external',
        href: 'https://bloggpt.reincarnatey.net',
        newTab: true,
        label: {
          vi: 'Tài liệu hướng dẫn Where1Returns',
          zh: 'Where1Returns 文档',
          en: 'Where1Returns docs',
        },
        icon: 'book-open',
      },*/
    ],
    menu: [
      {
        id: 'home',
        type: 'builtin',
        route: 'home',
        label: {
          vi: 'Trang chủ',
          zh: '首页',
          en: 'Home',
        },
        description: {
          vi: 'Tìm kiếm và các bài viết gần đây',
          zh: '搜索与近期文章',
          en: 'Search and recent articles',
        },
      },
      {
        id: 'posts',
        type: 'builtin',
        route: 'posts',
        page: 'posts',
        label: {
          vi: 'Bài viết',
          zh: '文章',
          en: 'Articles',
        },
        description: {
          vi: 'Duyệt tất cả bài viết',
          zh: '浏览所有文章',
          en: 'Browse all articles',
        },
      },
      {
        id: 'about',
        type: 'page',
        page: 'about',
        label: {
          vi: 'Giới thiệu',
          zh: '关于',
          en: 'About',
        },
        description: {
          vi: 'Giới thiệu về bản demo này',
          zh: '了解这个演示站',
          en: 'About this demo',
        },
      },
      /*      {
        id: 'theme-github',
        type: 'external',
        href: 'https://github.com/Raincarnator/Where1Returns',
        newTab: true,
        label: {
          vi: 'Github',
          zh: 'Github 仓库',
          en: 'Github repository',
        },
      },*/
      /* {
        id: 'docs',
        type: 'external',
        href: 'https://bloggpt.reincarnatey.net',
        newTab: true,
        label: {
          vi: 'Tài liệu hướng dẫn Where1Returns',
          zh: 'Where1Returns 文档',
          en: 'Where1Returns documentation',
        },
        description: {
          vi: 'Tự xây dựng blog của riêng bạn',
          zh: '开始搭建你的博客',
          en: 'Build your own blog',
        },
      },*/
    ],
    width: {
      default: 340,
      min: 240,
      max: 480,
    },
  },
  appearance: {
    defaultTheme: 'system',
    pageTransition: 'fade',
    codeThemes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    showCodeLineNumbers: false,
    categoryCoverStyle: 'thumbnail',
  },
  article: {
    display: {
      author: true,
      published: true,
      readingTime: true,
      updated: true,
      tags: true,
      share: true,
      navigation: true,
      title: true,
    },
    math: true,
    mermaid: true,
    lightbox: true,
    callouts: true,
    toc: {
      enabled: true,
      minDepth: 2,
      maxDepth: 4,
      expandDelay: 1000,
      hideDelay: 800,
    },
    shareCover: {
      enabled: true,
      width: 1200,
      height: 630,
      background: '#f5f5f5',
      foreground: '#171717',
      accent: '#3b82f6',
    },
  },
  footer: {
    since: 2026,
    author: 'Where1Returns',
    showAttribution: true,
    license: {
      label: 'CC BY-NC-SA 4.0',
      url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    },
  },
  sharing: {
    copyFormat: '{title}\n{description}\n{author} · {blog}\n{url}',
    platforms: [
      {
        name: 'X',
        icon: 'simple-icons:x',
        href: 'https://twitter.com/intent/tweet?text={title}&url={url}',
      },
      {
        name: 'Facebook',
        icon: 'simple-icons:facebook',
        href: 'https://www.facebook.com/sharer/sharer.php?u={url}',
      },
      {
        name: 'LinkedIn',
        icon: 'simple-icons:linkedin',
        href: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
      },
      {
        name: 'Reddit',
        icon: 'simple-icons:reddit',
        href: 'https://www.reddit.com/submit?url={url}&title={title}',
      },
      {
        name: 'Bluesky',
        icon: 'simple-icons:bluesky',
        href: 'https://bsky.app/intent/compose?text={text}',
      },
      {
        name: 'Threads',
        icon: 'simple-icons:threads',
        href: 'https://www.threads.net/intent/post?text={text}',
      },
      {
        name: 'Telegram',
        icon: 'simple-icons:telegram',
        href: 'https://t.me/share/url?url={url}&text={title}',
      },
      {
        name: 'WhatsApp',
        icon: 'simple-icons:whatsapp',
        href: 'https://wa.me/?text={text}',
      },
      {
        name: 'LINE',
        icon: 'simple-icons:line',
        href: 'https://social-plugins.line.me/lineit/share?url={url}',
      },
      {
        name: {
          vi: 'Weibo',
          zh: '微博',
          en: 'Weibo',
        },
        icon: 'simple-icons:sinaweibo',
        href: 'https://service.weibo.com/share/share.php?url={url}&title={title}&pic={image}',
      },
      {
        name: 'QQ',
        icon: 'simple-icons:qq',
        href: 'https://connect.qq.com/widget/shareqq/index.html?url={url}&title={title}&summary={description}&desc={description}&site={blog}&pics={image}',
      },
      {
        name: {
          vi: 'QQ',
          zh: 'QQ 空间',
          en: 'QQ Space',
        },
        icon: 'simple-icons:qzone',
        href: 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&summary={description}&pics={image}',
      },
      {
        name: 'Tumblr',
        icon: 'simple-icons:tumblr',
        href: 'https://www.tumblr.com/widgets/share/tool?canonicalUrl={url}&title={title}&caption={description}&posttype=link',
      },
      {
        name: 'Pinterest',
        icon: 'simple-icons:pinterest',
        href: 'https://www.pinterest.com/pin/create/button/?url={url}&media={image}&description={title}',
      },
      {
        name: {
          vi: 'Mail',
          zh: '电子邮件',
          en: 'Email',
        },
        icon: 'lucide:mail',
        href: 'mailto:?subject={title}&body={text}',
      },
    ],
  },
  statistics: {
    enabled: true,
    articleCount: true,
    wordCount: true,
    days: true,
    languages: true,
    averageWords: true,
    updateFrequency: true,
    firstPublication: true,
    lastUpdate: true,
    heatmap: true,
    recentWords: true,
    recentLimit: 12,
  },
};

export default config;
