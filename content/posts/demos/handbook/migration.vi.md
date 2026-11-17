---
title: 'Xuất bản và chuyển đổi: đưa nội dung lên trực tuyến'
slug: 'migration'
date: 2026-08-02
description: 'Thiết lập địa chỉ trang web và trạng thái xuất bản, sắp xếp nội dung hiện có, sau đó tiến hành xây dựng (build) và triển khai.'
categories: ['guide']
tags: ['astro', 'migration']
draft: true
---

Hãy thiết lập địa chỉ trang web, kiểm tra trạng thái xuất bản, sau đó xây dựng và triển khai để đưa trang web lên trực tuyến. Khi chuyển đổi một blog, bước đầu tiên là sắp xếp các bài viết và tệp đính kèm vào thư mục `content/`.

## Cấu hình địa chỉ

Thiết lập `site.baseUrl` thành địa chỉ chính thức (production) đầy đủ, ví dụ: `https://example.org/`. Nếu triển khai trong một thư mục con, hãy sử dụng định dạng như `https://example.org/blog/`.

Tham số `site.localePrefixPolicy` cho phép chọn chính sách tiền tố ngôn ngữ, trong khi `posts.pathPrefix` giúp thêm các phân đoạn đường dẫn vào bài viết, chẳng hạn như `[year]/` (năm). Khi thực hiện chuyển đổi, hãy giữ nguyên định danh bài viết thông qua thuộc tính `slug` và thiết lập chuyển hướng (redirect) từ các địa chỉ cũ sang địa chỉ mới tại máy chủ lưu trữ.

## Ngày tháng và trạng thái xuất bản

| Thiết lập                | Trạng thái xuất bản                                                    |
| ------------------------ | ---------------------------------------------------------------------- |
| Đã đến ngày xuất bản     | Được xuất bản và hiển thị trong danh sách, kết quả tìm kiếm và các nguồn cấp dữ liệu (feed) |
| `draft: true`            | Lưu dưới dạng bản nháp để xem trước trong quá trình phát triển          |
| Ngày trong tương lai     | Sẽ được xuất bản khi trang web được xây dựng lại sau khi đã đến ngày đó  |
| `hidden: true`           | Vẫn có thể truy cập qua địa chỉ trực tiếp; nhưng bị ẩn khỏi danh sách, kết quả tìm kiếm và các nguồn cấp dữ liệu |

Thuộc tính `date` xác định thời điểm xuất bản, còn `updated` ghi lại thời điểm cập nhật gần nhất. Hệ thống cũng hỗ trợ các bí danh (alias) cho ngày tháng để thuận tiện cho việc chuyển đổi. Xem thêm tại mục [Frontmatter](https://bloggpt.reincarnatey.net/en/content/frontmatter).

## Sắp xếp nội dung hiện có

Đặt các tệp Markdown/MDX vào thư mục `content/posts/`, đồng thời quản lý hình ảnh và tệp đính kèm theo dạng gói (bundle). Hãy chuyển đổi các shortcode và thẻ mẫu (template tag) từ hệ thống cũ sang định dạng Markdown, HTML hoặc MDX. Các danh mục (category) và thẻ (tag) được liên kết thông qua các `slug`. Xem thêm tại mục [Tổ chức nội dung](../content-bundle/) để biết chi tiết về cấu trúc tệp. ## Xây dựng và xem trước

```sh title="Terminal"
pnpm build
pnpm preview
```

Quá trình xây dựng (build) sẽ kiểm tra kiểu dữ liệu (types), tạo các trang, tệp đính kèm, ảnh bìa chia sẻ và chỉ mục tìm kiếm Pagefind. Bạn có thể xem trước các bài viết, hình ảnh, liên kết, tính năng chuyển đổi ngôn ngữ và kết quả tìm kiếm.

## RSS và Sơ đồ trang web (Sitemap)

Mỗi ngôn ngữ đều có nguồn cấp dữ liệu RSS riêng, khả dụng tại `/zh/rss.xml` và `/en/rss.xml` theo cấu hình mặc định. Điểm truy cập sơ đồ trang web là `/sitemap-index.xml`, liệt kê các URL cuối cùng của các trang công khai.

## Triển khai và cập nhật

Để tự động xây dựng và triển khai blog, hãy kết nối kho lưu trữ Git với Vercel (khuyến nghị):

1. Đẩy (push) mã nguồn giao diện vào kho lưu trữ Git của riêng bạn và nhập (import) nó vào Vercel.
2. Chọn `Astro` làm Framework Preset và giữ nguyên Root Directory là thư mục gốc của kho lưu trữ.
3. Thiết lập Install Command là `pnpm install --frozen-lockfile`, Build Command là `pnpm build` và Output Directory là `dist`. Chọn Node.js phiên bản `24.x` và thêm biến môi trường `ENABLE_EXPERIMENTAL_COREPACK=1` vào cả môi trường Production (sản phẩm) và Preview (xem trước).
4. Thiết lập `site.baseUrl` thành tên miền chính thức (production domain), lưu cấu hình (commit) và triển khai. Các lần đẩy mã sau đó vào nhánh chính (production branch) sẽ tự động xây dựng lại và cập nhật trang web; hãy sử dụng các nhánh khác cho mục đích xem trước.

Lệnh `pnpm build` sẽ tạo các tệp đính kèm đã đóng gói, ảnh bìa chia sẻ và chỉ mục tìm kiếm Pagefind. Hãy thực hiện xây dựng lại (build) khi một bài viết đã lên lịch đến ngày xuất bản. Bạn cũng có thể sử dụng các nền tảng lưu trữ tĩnh khác bằng cách tải lên toàn bộ thư mục `dist/`, bao gồm các tệp chỉ mục thư mục (directory indexes) và trang 404.

Xem hướng dẫn chi tiết tại [Xây dựng và triển khai](https://bloggpt.reincarnatey.net/en/guide/deployment).
