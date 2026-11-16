---
title: 'Chào mừng đến với Where1Returns'
slug: 'welcome'
date: 2026-10-16
description: 'Bắt đầu với sơ đồ tính năng và trình tự đọc để xây dựng trang web đầu tiên của bạn.'
categories: ['guide']
tags: ['astro', 'design']
featured: true
image: '/images/covers/muon-phap-ve-mot-mot-ve-dau.avif'
---

Where1Returns là một giao diện tĩnh (static theme) được xây dựng bằng Astro. Mỗi bài viết giới thiệu một nhóm các tính năng. Bạn có thể khám phá giao diện trước hoặc làm theo trình tự đọc dưới đây.

## Từ bố cục dạng trò chuyện đến blog

Thanh bên chứa các mục điều hướng, bài viết được ghim và các bài đăng gần đây, trong khi khu vực chính hiển thị nội dung. Ô nhập liệu trên trang chủ giúp tìm kiếm bài viết, còn các trang đọc duy trì khoảng cách và các nút điều khiển quen thuộc. Mỗi bài viết đều có địa chỉ tĩnh riêng, thuận tiện cho việc đánh dấu (bookmark), đăng ký theo dõi và chia sẻ.

## Trình tự đọc gợi ý

| Giai đoạn             | Bài viết                                                    | Những gì bạn có thể thực hiện sau đó                          |
| -------------------- | ----------------------------------------------------------- | ------------------------------------------------------------- |
| Chuẩn bị nội dung    | [Tổ chức nội dung](../content-bundle/)                  | Quản lý tệp tin, bản dịch, tệp đính kèm và các mẫu viết bài    |
| Bắt đầu viết         | [Định dạng văn bản Markdown](../markdown/)                  | Viết văn bản, danh sách, bảng biểu và mã nguồn                |
| Làm phong phú nội dung | [Nâng cao bài viết](../article-enhancements/)            | Sử dụng các khối chú thích, công thức toán học, sơ đồ và hộp hiển thị ảnh (lightbox) |
| Kiểm soát các tính năng nâng cao | [Cấu hình nâng cao cho từng bài viết](../enhancement-overrides/) | Ghi đè các thiết lập mặc định toàn cục                        |
| Điều chỉnh trang đọc | [Hiển thị bài viết](../display-options/)                    | Lựa chọn các thông tin bài viết cần hiển thị                  |
| Khám phá tương tác   | [Duyệt và tìm kiếm](../design/)                           | Sử dụng tính năng tìm kiếm, dàn ý, lệnh điều khiển, chia sẻ và thống kê |
| Tùy chỉnh trang web  | [Cấu hình và mở rộng](../configuration/)                   | Thiết lập giao diện, nội dung văn bản, điều hướng và các tiện ích mở rộng toàn cục |
| Chuẩn bị xuất bản    | [Xuất bản và di chuyển dữ liệu](../migration/)              | Cấu hình tên miền, khả năng hiển thị, nguồn cấp dữ liệu (feed) và triển khai trang web |
| Xem kết quả          | [Ví dụ về trang đọc](../reading-sample/)                    | Quan sát cách hiển thị ảnh bìa, các đoạn văn dài, trích dẫn và khoảng cách trình bày | ## Chạy cục bộ trước

```sh title="Terminal"
pnpm install
pnpm dev
```

Sử dụng bản xem trước cục bộ để chỉnh sửa nội dung. Xây dựng trang web để xem chỉ mục tìm kiếm sản xuất và chia sẻ ảnh bìa. Các bước xuất bản được tập hợp trong “Xuất bản và di chuyển”; tài liệu chủ đề trong kho lưu trữ bao gồm các mục riêng lẻ.

## Giữ nguyên quy trình viết của bạn

Cài đặt chủ đề và nội dung được quản lý riêng biệt. Điều chỉnh điều hướng, văn bản mô tả và các tính năng đọc, hoặc thêm kiểu và tập lệnh thông qua các tệp mở rộng toàn cục. Nội dung được lưu trữ trong các tệp cục bộ và được xây dựng thành một trang web sẵn sàng cho lưu trữ tĩnh.
