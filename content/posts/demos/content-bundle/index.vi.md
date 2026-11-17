---
title: 'Tổ chức nội dung: tệp tin, ngôn ngữ và tài nguyên'
slug: 'content-bundle'
date: 2026-09-28
description: 'Quản lý bài viết, trang, danh mục, thẻ và tệp đính kèm thông qua các tệp tin và gói nội dung (bundle).'
categories: ['guide']
tags: ['content', 'i18n']
draft: true
---

Các bài viết, trang độc lập, danh mục và thẻ đều nằm trong thư mục `content/`. Bạn có thể sắp xếp chúng vào các thư mục con và sử dụng phần frontmatter để khai báo tiêu đề, đường dẫn (slug) cùng các thông tin chi tiết khác.

## Bốn loại nội dung

| Thư mục               | Mục đích                                         |
| --------------------- | ----------------------------------------------- |
| `content/posts/`      | Các bài viết                                    |
| `content/pages/`      | Các trang độc lập và phần giới thiệu trang tích hợp |
| `content/categories/` | Tên, mô tả, ảnh bìa và nội dung của danh mục    |
| `content/tags/`       | Tên, mô tả, ảnh bìa và nội dung của thẻ         |

Mỗi loại đều hỗ trợ định dạng Markdown, MDX và cấu trúc thư mục lồng nhau.

## Tệp tin và đường dẫn

Sử dụng tệp `hello.md` hoặc `hello.mdx` cho một nội dung độc lập. Đối với hình ảnh và các tệp đính kèm, hãy tạo một thư mục chứa tệp `index.md` hoặc `index.mdx` để làm điểm truy cập chính (entry point) cho gói nội dung đó.

Thuộc tính `slug` xác định đường dẫn của nội dung. Ví dụ, `slug: content-bundle` sẽ tạo ra đường dẫn `/en/posts/content-bundle/` (theo chính sách tiền tố ngôn ngữ mặc định). Khi bạn di chuyển các thư mục quản lý, đường dẫn (slug) đã được thiết lập cụ thể sẽ không thay đổi.

## Chi tiết bài viết

```yaml
title: Một bài viết mẫu
slug: example
date: 2026-01-01
description: Giới thiệu bài viết trong một câu.
categories: [guide]
tags: [astro, content]
image: ./cover.webp
featured: true
```

Các trường `categories` và `tags` tham chiếu đến slug của danh mục và thẻ tương ứng. Thiết lập `featured: true` sẽ đưa bài viết vào mục được ghim (pinned) trên thanh bên. Thông tin về ngày tháng và trạng thái xuất bản được đề cập trong phần [Xuất bản và di chuyển dữ liệu](../migration/). ## Hình ảnh và tệp đính kèm

Tham chiếu đến hình ảnh và tệp trong gói (bundle) bằng đường dẫn tương đối:

![Một dải màu chuyển từ xanh dương sang xanh lơ](./cover.webp)

Ví dụ về các tệp đính kèm: [văn bản thuần](./resources/readme.txt), [mã nguồn Python](./resources/example.py), [trang HTML](./example.html), [tệp Markdown](./resources/notes.md) và [tệp lưu trữ (archive)](./resources/example.zip). Các tệp này sẽ được xuất bản cùng với gói nội dung trong quá trình xây dựng (build).

## Nội dung đa ngôn ngữ

Sử dụng các tệp có hậu tố ngôn ngữ, chẳng hạn như `index.zh.mdx` và `index.en.md`, đặt trong cùng một thư mục để cung cấp các bản dịch cho một mục nội dung. Các tệp độc lập cũng hỗ trợ quy tắc đặt tên tương tự, ví dụ: `hello.zh.md` và `hello.en.mdx`.

Menu ngôn ngữ cho phép người dùng truy cập nội dung tương ứng. Xem phần [Ngôn ngữ và bản dịch](https://bloggpt.reincarnatey.net/en/content/languages) để biết cách cấu hình và thêm các ngôn ngữ khác.

## Mẫu soạn thảo (Templates)

```sh title="Terminal"
pnpm new post my-first-post --title "Bài viết đầu tiên của tôi"
pnpm new post a-bundle --use bundle --title "Bài viết kèm tệp đính kèm"
pnpm new page contact --use bundle
```

Bạn có thể chọn loại nội dung là `post` (bài viết), `page` (trang), `category` (danh mục) hoặc `tag` (thẻ); đặt tiêu đề bằng tham số `--title`; và chọn mẫu soạn thảo bằng tham số `--use`. Các mẫu này được lưu trữ trong thư mục `archetypes/` và có thể tùy chỉnh để phù hợp với quy trình viết bài của bạn.
