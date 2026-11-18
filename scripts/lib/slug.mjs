export function toKebabCase(str) {
  return str
    ?.normalize("NFD") // tách dấu khỏi ký tự (Ví dụ: "ấ" -> "a" + "̂")
    ?.replace(/[\u0300-\u036f]/g, "") // xoá toàn bộ dấu
    ?.replace(/đ/g, "d")              // chuyển đ -> d
    ?.replace(/Đ/g, "d")
    ?.toLowerCase()
    ?.trim()
    ?.replace(/[^a-z0-9\s-]/g, "") // xoá ký tự đặc biệt (chỉ giữ chữ, số, khoảng trắng, gạch ngang)
    ?.replace(/\s+/g, "-") // thay khoảng trắng bằng gạch ngang
    ?.replace(/-+/g, "-"); // gộp nhiều dấu "-" liên tiếp thành một
}
export const validSlug = (value) =>
  typeof value === 'string' &&
  /^[a-zA-Z0-9][a-zA-Z0-9-]*$/.test(toKebabCase(value));

export const slugRule =
  'Use only lowercase ASCII letters (a-z),  uppercase ASCII letters (A-Z), digits (0-9), and hyphens (-), starting with a letter or digit.';
