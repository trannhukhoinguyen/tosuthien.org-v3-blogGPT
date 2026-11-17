---
title: 'Các tùy chọn bổ trợ: thiết lập mặc định và ghi đè theo từng bài viết'
slug: 'enhancement-overrides'
date: 2026-09-03
description: 'Chọn các tính năng bổ trợ cho từng bài viết và ghi đè lên các thiết lập mặc định toàn cục.'
categories: ['writing']
tags: ['markdown']
draft: true
---

Các tính năng như công thức toán học, sơ đồ, trình xem ảnh (lightbox), khung chú thích (callout), mục lục và ảnh bìa chia sẻ tự động đều hỗ trợ cả thiết lập mặc định toàn cục lẫn tùy chọn ghi đè cho từng bài viết.

## Thiết lập mặc định toàn cục

Bạn có thể đặt các giá trị mặc định trong mục `article` tại tệp `blog.config.ts`. Mục lục được điều khiển bởi `toc.enabled`, còn ảnh bìa chia sẻ tự động được điều khiển bởi `shareCover.enabled`.

## Ghi đè theo từng bài viết

Hãy thêm các trường mà bạn muốn điều chỉnh vào phần frontmatter (phần thông tin cấu hình ở đầu tệp) của bài viết hoặc trang độc lập:

```yaml
math: true
mermaid: false
lightbox: true
callouts: true
toc: true
shareCover: false
```

Giá trị `true` dùng để bật tính năng, `false` để tắt; nếu không khai báo, trường đó sẽ kế thừa thiết lập mặc định toàn cục. Bạn chỉ cần liệt kê những trường muốn thay đổi.

## Các tùy chọn khả dụng

| Trường       | Tính năng                     |
| ------------ | ---------------------------- |
| `math`       | Công thức toán học (KaTeX)   |
| `mermaid`    | Sơ đồ (Mermaid)              |
| `lightbox`   | Trình xem ảnh (PhotoSwipe)   |
| `callouts`   | Khung chú thích (Callouts)   |
| `toc`        | Mục lục bài viết             |
| `shareCover` | Ảnh bìa chia sẻ tự động (Satori) |

Nếu tắt các tính năng như công thức toán học, sơ đồ hoặc khung chú thích, nội dung sẽ hiển thị dưới dạng mã nguồn gốc hoặc văn bản trích dẫn thông thường. Nếu tắt tính năng tạo ảnh bìa chia sẻ tự động, hệ thống sẽ sử dụng ảnh bìa đã thiết lập cho bài viết đó để hiển thị khi chia sẻ.

Hãy trải nghiệm các tính năng này tại mục [Bổ trợ bài viết](../article-enhancements/). Các thiết lập hiển thị tiêu đề và tác giả được đề cập trong phần [Tùy chọn hiển thị bài viết](../display-options/).
