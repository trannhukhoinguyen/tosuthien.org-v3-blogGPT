---
title: 'Hiển thị bài viết: chỉ giữ lại những gì bạn cần'
slug: 'display-options'
date: 2026-08-26
description: 'Chọn hiển thị tiêu đề, tác giả, ngày tháng, thời gian đọc, thẻ (tags) và tùy chọn chia sẻ cho từng bài viết.'
categories: ['writing']
tags: ['design']
updated: '2026-10-16'
---

Bạn có thể tùy chọn các thông tin hiển thị trên trang bài viết, chẳng hạn như tiêu đề, tác giả và ngày tháng. Các thiết lập chung được quản lý tại `article.display`, trong khi các thiết lập riêng cho từng bài viết được cấu hình thông qua thuộc tính `display` trong phần frontmatter.

## Chọn thông tin hiển thị

| Trường        | Nội dung hiển thị                 |
| ------------- | --------------------------------- |
| `title`       | Tiêu đề, mô tả và các danh mục    |
| `author`      | Tác giả                           |
| `published`   | Ngày xuất bản                     |
| `readingTime` | Thời gian đọc ước tính            |
| `updated`     | Ngày cập nhật gần nhất            |
| `tags`        | Các thẻ (tags) ở cuối bài         |
| `share`       | Nút và bảng tùy chọn chia sẻ      |
| `navigation`  | Bài viết trước và bài viết tiếp theo |

Mặc định, tất cả các thiết lập đều được bật. Nếu trường `updated` được cung cấp và khác với ngày xuất bản, thông tin về lần cập nhật gần nhất sẽ hiển thị ở cuối bài viết.

## Tùy chỉnh cho từng bài viết

Ví dụ, để ẩn thông tin tác giả và thời gian đọc cho một bài viết cụ thể:

```yaml
display:
author: false
readingTime: false
```

Các trường khác sẽ kế thừa thiết lập chung. Việc đặt giá trị `true` hoặc `false` trong frontmatter của một bài viết sẽ ghi đè lên thiết lập mặc định chung.

## Các trang độc lập

Các trang độc lập (như trang [About Where1Returns](../../about/)) cũng hỗ trợ hiển thị tiêu đề, tác giả, ngày tháng, thời gian đọc, thông tin cập nhật và tùy chọn chia sẻ. Hãy chọn các thông tin phù hợp cho từng trang.

Xem thêm mục [Các tùy chọn nâng cao](../enhancement-overrides/) để biết thêm về các cải tiến nội dung, và mục [Xuất bản và di chuyển dữ liệu](../migration/) để tìm hiểu về các trạng thái xuất bản.
