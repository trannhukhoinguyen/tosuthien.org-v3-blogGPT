# Where1Returns

**Một giao diện blog hiện đại xây dựng bằng [Astro](https://astro.build/), lấy cảm hứng từ phong cách tối giản và tập trung của ChatGPT.**

Viết nội dung bằng Markdown hoặc MDX, sắp xếp các bài viết thông qua thanh bên có thể thu gọn, đồng thời giúp độc giả tìm kiếm mọi thứ trong tích tắc nhờ tính năng tìm kiếm toàn văn bản (full-text search) được tích hợp sẵn.

**Tiếng Anh** · [Tiếng Trung giản thể](README.zh-CN.md)

[Xem bản demo](https://demo.bloggpt.reincarnatey.net) · [Tài liệu hướng dẫn](https://bloggpt.reincarnatey.net/en/) · [Kho lưu trữ trên GitHub](https://github.com/Raincarnator/astro-theme-Where1Returns)

[![Triển khai với Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRaincarnator%2Fastro-theme-Where1Returns-starter)
&nbsp;
[![Triển khai với Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Raincarnator/astro-theme-Where1Returns-starter)

Bắt đầu nhanh chóng chỉ trong vài phút với [Mẫu khởi đầu (Starter Template) của Where1Returns](https://github.com/Raincarnator/astro-theme-Where1Returns-starter). Mẫu này đã được cấu hình sẵn với một bài viết mẫu, trang "Giới thiệu" (About) và các thiết lập mặc định tối ưu. Bạn cũng có thể [tạo một kho lưu trữ mới từ mẫu trên GitHub](https://github.com/Raincarnator/astro-theme-Where1Returns-starter/generate) rồi kết nối với nhà cung cấp dịch vụ lưu trữ (hosting) sau. Kho lưu trữ chính của giao diện này đã bao gồm toàn bộ nội dung demo và tài liệu hướng dẫn chi tiết.

> **Bạn mới bắt đầu?** Hãy xem qua [Hướng dẫn bắt đầu (Getting Started Guide)](https://bloggpt.reincarnatey.net/en/guide/getting-started), sau đó khám phá [Tài liệu hướng dẫn](https://bloggpt.reincarnatey.net/en/) để tùy chỉnh blog của riêng bạn. ![Where1Returns Home: Tìm kiếm & Thanh bên có thể thay đổi kích thước](.github/assets/readme/home.webp)

## Các tính năng chính

| Danh mục                  | Điểm nổi bật                                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Trải nghiệm đọc**       | Bố cục linh hoạt (responsive) theo phong cách ChatGPT, thanh bên có thể thay đổi kích thước, hỗ trợ giao diện sáng/tối/theo hệ thống, mục lục có thể thu gọn, phím tắt và điều hướng mượt mà phía client |
| **Quản lý nội dung**      | Bài viết, trang độc lập, danh mục và thẻ (tag); tùy chỉnh đường dẫn (slug), cấu trúc nội dung theo thư mục cho các tệp đính kèm cục bộ, cùng các mẫu khởi tạo (archetypes) qua CLI |
| **Markdown nâng cao**     | Hỗ trợ đầy đủ Markdown & MDX, làm nổi bật cú pháp mã nguồn (Expressive Code), công thức toán học KaTeX, sơ đồ Mermaid, các khối ghi chú (callout) và tính năng phóng to hình ảnh (lightbox) |
| **Khám phá nội dung**     | Bài viết nổi bật/được ghim, lưu trữ theo trình tự thời gian, phân trang với tính năng chuyển nhanh đến trang cụ thể, kiểu hiển thị trang danh mục, đám mây thẻ (tag cloud) và danh sách blog liên kết (blogroll) |
| **Tìm kiếm tức thì**      | Tìm kiếm toàn văn bản tĩnh (static full-text search) thông qua Pagefind; hỗ trợ tìm kiếm trong bài viết, tiêu đề/mô tả, nội dung hoặc toàn bộ trang web, làm nổi bật từ khóa và các lệnh qua phím `/` |
| **Đa ngôn ngữ (i18n)**    | Giao diện tích hợp sẵn tiếng Anh và tiếng Trung giản thể, định tuyến URL theo ngôn ngữ, liên kết bản dịch dựa trên tên tệp và khả năng tùy chỉnh văn bản giao diện |
| **Thống kê & Chia sẻ**    | Ước tính thời gian đọc, đếm số từ, thống kê viết bài toàn trang kèm biểu đồ nhiệt hoạt động, tùy chỉnh đoạn trích chia sẻ và tự động tạo ảnh bìa Open Graph linh hoạt |
| **SEO & Khả năng mở rộng**| Hỗ trợ thẻ Open Graph, Twitter Cards, RSS feed, sơ đồ trang web (Sitemap) và các điểm mở rộng (extension hooks) như `custom/head.html`, `custom/styles.css`, `custom/client.ts` | ## Xem trước giao diện

### Trang bài viết · Chế độ sáng

![Trang bài viết ở chế độ sáng](.github/assets/readme/article-light.webp)

<details>
<summary>Xem thêm sáu giao diện khác</summary>

### Danh sách bài viết

![Danh sách bài viết kèm ảnh bìa, thẻ và phân trang](.github/assets/readme/posts.webp)

### Trang bài viết · Chế độ tối

![Trang bài viết ở chế độ tối](.github/assets/readme/article-dark.webp)

### Danh mục

![Ảnh bìa danh mục và đám mây thẻ](.github/assets/readme/categories.webp)

### Lưu trữ

![Các bài viết được nhóm theo năm xuất bản](.github/assets/readme/archives.webp)

### Bạn bè

![Danh sách liên kết bạn bè và các tài nguyên được phân nhóm](.github/assets/readme/friends.webp)

### Thống kê

![Thống kê viết bài, bản đồ nhiệt xuất bản và biểu đồ độ dài bài viết](.github/assets/readme/statistics.webp)

</details>

## Bắt đầu nhanh

Hãy làm theo [Hướng dẫn bắt đầu](https://bloggpt.reincarnatey.net/en/guide/getting-started) để khởi tạo dự án mới, cài đặt các phụ thuộc và chạy máy chủ phát triển cục bộ.

## Giấy phép

Mã nguồn của giao diện được phát hành theo giấy phép [Apache-2.0](LICENSE). Tài liệu được cấp phép theo giấy phép [MIT](apps/docs/LICENSE). Vui lòng xem [thông báo về bên thứ ba](THIRD_PARTY_NOTICES.md) để biết thông tin về các tài nguyên và phụ thuộc đi kèm.
