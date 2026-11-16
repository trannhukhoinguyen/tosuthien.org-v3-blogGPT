---
title: 'Định dạng Markdown: văn bản, bảng biểu và mã nguồn'
slug: 'markdown'
date: 2026-09-17
description: 'Xem cách hiển thị của văn bản, liên kết, danh sách, bảng biểu, mã nguồn và hình ảnh.'
categories: ['writing']
tags: ['markdown']
image: '/images/covers/muon-phap-ve-mot-mot-ve-dau.avif'
---

Markdown cung cấp các định dạng cơ bản cho văn bản, danh sách, bảng biểu và mã nguồn. Hãy xem cách hiển thị của từng thành phần trong bài viết dưới đây.

## Văn bản và liên kết

Sử dụng **in đậm**, _in nghiêng_, ~~gạch ngang~~ và `mã nguồn trong dòng`.

Các liên kết có thể dẫn đến một [bài viết trên trang này](../welcome/) hoặc một trang bên ngoài, chẳng hạn như [tài liệu của Astro](https://docs.astro.build/).

## Danh sách

### Danh sách có thứ tự và không có thứ tự

1. Nêu một câu hỏi cụ thể.
2. Giải thích quy trình kèm theo ví dụ.
3. Bổ sung nguồn tham khảo cho phần kết luận.

- Táo
- Chuối
- Cam

### Danh sách công việc (Task lists)

- [x] Hoàn thành bài viết
- [x] Kiểm tra các liên kết nội bộ
- [ ] Đọc lại một lần trên màn hình hẹp

## Trích dẫn và đường kẻ phân cách

> Văn bản trích dẫn được hỗ trợ,
>
> > bao gồm cả các trích dẫn lồng nhau.

Các đường kẻ phân cách cũng được hỗ trợ.

---

## Bảng biểu

| Nội dung     | Cú pháp    | Mục đích |
| :---------- | :----------: | -----------------: |
| Tiêu đề     | `## Heading` | Tổ chức các phần |
| Trích dẫn   | `> ​​Text`   | Bổ sung ngữ cảnh |
| Mã trong dòng | Dấu backtick (`) | Xác định các biến |

Các bảng có kích thước lớn sẽ tự động cuộn theo chiều ngang trong phạm vi hiển thị của chúng.

## Khối mã nguồn (Code blocks)

```ts title="greeting.ts" {2,5}
type Reader = { name: string };
const reader: Reader = { name: 'Where1Returns' };

function greeting({ name }: Reader) {
return `Hello, ${name}!`;
}
```

```sh title="Terminal"
pnpm check
pnpm build
```

Các khối mã nguồn hỗ trợ tô sáng cú pháp, hiển thị tên tệp, đánh dấu dòng và tính năng sao chép. Cấu hình các chủ đề sáng/tối cho mã nguồn và hiển thị số dòng trong mục `appearance`.

## Hình ảnh

![Tranh màu nước tông xanh dương và xanh lơ](/images/illustrations/blue-flow.webp)

Chèn hình ảnh bằng cú pháp `![mô tả](đường_dẫn)`. Xem phần [Tổ chức nội dung](../content-bundle/) để biết thêm về các tệp tin và tệp đính kèm, đồng thời tham khảo [Cải tiến bài viết](../article-enhancements/) để tìm hiểu về cách thêm công thức toán học, sơ đồ và các thành phần tương tác.
