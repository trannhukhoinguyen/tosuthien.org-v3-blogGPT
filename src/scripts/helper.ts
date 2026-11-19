export function stringToColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 70%, 50%)`; // Luôn cho ra màu tươi, độ sáng chuẩn
}

export const buddhistColors = [
  '#D97706', // Vàng hổ phách trầm (Amber 600)
  '#B45309', // Vàng nâu y bát (Amber 700)
  '#CA8A04', // Vàng nghệ (Yellow 600)
  '#A16207', // Vàng đất thiền môn (Yellow 700)
  '#EA580C', // Cam vàng cà-sa (Orange 600)
  '#C2410C', // Cam đất trầm (Orange 700)
  '#b08604',
  '#585858',
  '#b0912b',
  '#C58917', // Vàng nghệ cổ điển (Saffron Gold)
];

// Hàm xáo trộn mảng (Fisher-Yates Shuffle) để không bị trùng màu liên tiếp
export function shuffleColors(array: string[]) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function applyRandomBuddhistColors() {
  const badges = document.querySelectorAll<HTMLElement>('[data-category]');
  const shuffledPalette = shuffleColors(buddhistColors);
  const colorMap = new Map<string, string>();

  // Gán màu ngẫu nhiên không trùng lặp cho từng category duy nhất
  badges.forEach((badge, index) => {
    const title = badge.dataset.category;
    if (title && !colorMap.has(title)) {
      const color = shuffledPalette[index % shuffledPalette.length];
      colorMap.set(title, color);
    }
    if (title) {
      badge.style.backgroundColor = colorMap.get(title)!;
    }
  });

  // Áp dụng đúng màu đó cho viền và chữ của các thẻ bên dưới
  document
    .querySelectorAll<HTMLElement>('[data-category-card]')
    .forEach((card) => {
      const title = card.dataset.categoryCard;
      if (title && colorMap.has(title)) {
        card.style.borderLeftColor = colorMap.get(title)!;
      }
    });

  document
    .querySelectorAll<HTMLElement>('[data-category-text]')
    .forEach((text) => {
      const title = text.dataset.categoryText;
      if (title && colorMap.has(title)) {
        text.style.color = colorMap.get(title)!;
      }
    });
}
