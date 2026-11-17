---
title: 'Cấu hình và mở rộng: tùy chỉnh theo ý bạn'
slug: 'configuration'
date: 2026-08-15
description: 'Điều chỉnh giao diện, nội dung văn bản, điều hướng, tính năng chia sẻ, thống kê, đồng thời thêm các kiểu định dạng (styles) và tập lệnh (scripts) của riêng bạn.'
categories: ['customization']
tags: ['astro', 'design']
updated: '2026-10-16'
draft: true
---

Sử dụng `blog.config.ts` để điều chỉnh giao diện, nội dung và các tương tác trên trang web. Quản lý danh sách liên kết bạn bè trong `friends.config.ts`, đồng thời thêm các kiểu định dạng hoặc tập lệnh tùy chỉnh thông qua các tệp tin nằm trong thư mục `custom/`.

## Thông tin trang web và nội dung văn bản

`site` dùng để thiết lập tên trang web, địa chỉ miền chính thức (production address), ngôn ngữ và múi giờ; `author` dùng để thiết lập tên tác giả, tiểu sử, ảnh đại diện và các liên kết mạng xã hội. Các tiêu đề trên trang chủ, gợi ý tìm kiếm và nội dung ở chân trang (footer) được quản lý trong mục `text`.

Các nội dung văn bản có thể là chuỗi ký tự thuần túy hoặc các đối tượng đa ngôn ngữ (localized maps):

```ts
author: {
name: { zh: '站点作者', en: 'Site author' },
bio: {
zh: '记录日常与想法。',
en: 'Notes from everyday life.',
},
}
```

Chọn ngôn ngữ cho nội dung thông qua `site.locales`; nếu thiếu bản dịch cho giao diện, hệ thống sẽ tự động sử dụng ngôn ngữ mặc định thay thế. Người đóng góp có thể thêm bản dịch mới tại thư mục `src/i18n/`, đăng ký chúng trong tệp `i18n.config.ts` tại cùng thư mục đó, rồi gửi cả hai vào kho lưu trữ (repository).

## Giao diện

```ts title="blog.config.ts"
appearance: {
defaultTheme: 'system',
pageTransition: 'fade',
codeThemes: { light: 'github-light', dark: 'github-dark' },
showCodeLineNumbers: false,
categoryCoverStyle: 'thumbnail',
}
```

Bạn có thể chọn giao diện sáng (light), tối (dark) hoặc theo thiết lập hệ thống (system), tùy chỉnh hiệu ứng chuyển trang và giao diện hiển thị mã nguồn (code themes). Các thẻ danh mục (category cards) hỗ trợ nhiều kiểu ảnh bìa: ảnh thu nhỏ (thumbnail), hiệu ứng mờ dần về phía bên phải (right-fading) hoặc ảnh nền toàn phần (full-background). Bạn cũng có thể điều chỉnh kiểu ảnh bìa cho từng danh mục riêng biệt thông qua thuộc tính `coverStyle`. ## Điều hướng, chân trang và các liên kết khác

`sidebar.items` thiết lập điều hướng ở thanh bên, còn `sidebar.menu` thiết lập menu tại tên trang web ở góc trên bên trái. Các mục này có thể dẫn đến các trang tích hợp sẵn, trang độc lập hoặc liên kết bên ngoài. Khi liên kết một trang tích hợp sẵn thông qua thuộc tính `page`, hệ thống sẽ tự động sử dụng tiêu đề, mô tả và phần giới thiệu từ mục tương ứng trong cấu hình trang.

`footer` cho phép thiết lập ngày bắt đầu, tác giả giữ bản quyền, giấy phép nội dung và thông tin ghi nhận chủ đề (theme). Phần liên kết đến các trang khác (friend links) hỗ trợ phân nhóm, hiển thị ảnh đại diện, mô tả và tính năng tìm kiếm.

## Chia sẻ và thống kê

`sharing.copyFormat` quy định nội dung thông báo khi sao chép liên kết chia sẻ; `sharing.platforms` thiết lập tên nền tảng, biểu tượng và đường dẫn tương ứng. Bạn có thể sử dụng các biến giữ chỗ (placeholder) như `{title}`, `{description}`, `{author}`, `{blog}` và `{url}`.

`article.shareCover` cho phép tùy chỉnh kích thước, màu sắc và phông chữ cho ảnh bìa chia sẻ được tạo tự động bằng Satori. `statistics` giúp kiểm soát các chỉ số riêng lẻ, biểu đồ nhiệt (heatmap) về tần suất đăng bài và thanh hiển thị độ dài bài viết.

## Các tiện ích mở rộng toàn cục

| Tệp                      | Mục đích                                     |
| ------------------------ | ------------------------------------------- |
| `custom/head.html`       | Thêm nội dung vào phần `<head>`             |
| `custom/body-start.html` | Thêm nội dung vào đầu phần `<body>`         |
| `custom/body-end.html`   | Thêm nội dung vào cuối phần `<body>`        |
| `custom/styles.css`      | Các kiểu định dạng (CSS) tùy chỉnh           |
| `custom/client.ts`       | Chạy tập lệnh (script) khi tải trang và xử lý dọn dẹp |
| `custom/components/`     | Các thành phần MDX dùng chung cho nhiều bài viết |

Vui lòng tham khảo [tài liệu về chủ đề (theme)](https://bloggpt.reincarnatey.net/en/config/reference) để xem chi tiết tất cả các trường cấu hình, giá trị mặc định và ví dụ minh họa.
