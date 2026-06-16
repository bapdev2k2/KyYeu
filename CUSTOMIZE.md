# Hướng Dẫn Tùy Chỉnh Thư Mời Kỷ Yếu

Để tùy chỉnh ứng dụng cho trường học hoặc sự kiện của bạn, hãy làm theo các bước dưới đây:

## 1. Thay Đổi Thông Tin Sự Kiện

### Tệp: `components/invitation-letter.tsx`

Tìm section "Event Details" và sửa thông tin:

```typescript
// Thời gian
<p className="text-lg font-semibold text-gray-800">28/06/2026 - 9:00 AM</p>

// Địa điểm
<p className="text-lg font-semibold text-gray-800">Trường THPT Vĩnh Lộc</p>

// Dress code
<p className="text-lg font-semibold text-gray-800">Áo dài / Chỉnh trang lịch sự</p>
```

### Metadata & Tiêu Đề

**Tệp: `app/layout.tsx`**

Sửa tiêu đề và mô tả:

```typescript
export const metadata: Metadata = {
  title: 'Thư Mời Kỷ Yếu - Trường THPT Vĩnh Lộc', // Đổi tên trường
  description: 'Mời bạn đến dự buổi chụp ảnh kỷ yếu lớp 12 - 28/06/2026 lúc 9:00 AM', // Đổi ngày giờ
};
```

## 2. Thay Đổi Nội Dung Thư

### Tệp: `components/invitation-letter.tsx`

```typescript
// Đề mục
<h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
  Chụp Kỷ Yếu
</h2>

// Nội dung chính
<p>
  Mình rất mong có sự góp mặt của bạn trong buổi chụp kỷ yếu sắp tới.
</p>

<p>
  Đây sẽ là dịp để chúng ta cùng lưu giữ những khoảnh khắc cuối cùng của tuổi học trò, 
  những ký ức vàng son mà sẽ luôn nằm trong lòng chúng ta.
</p>
```

## 3. Thay Đổi Màu Sắc & Thiết Kế

### Gradient Colors

Tất cả các nút và phần tử sử dụng gradient:
`from-pink-400 via-purple-400 to-blue-400`

Để thay đổi màu sắc, hãy sửa trong các tệp component:

**Các tùy chọn Tailwind gradient:**

- Pink: `from-pink-400 via-pink-500 to-pink-600`
- Purple: `from-purple-400 via-purple-500 to-purple-600`
- Blue: `from-blue-400 via-blue-500 to-blue-600`
- Red: `from-red-400 via-red-500 to-red-600`
- Green: `from-green-400 via-green-500 to-green-600`

Ví dụ thay đổi nút:

```typescript
// Trước
className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"

// Sau (Gradient đỏ)
className="bg-gradient-to-r from-red-400 via-red-500 to-red-600"
```

### Background Colors

**Tệp: `app/page.tsx`**

```typescript
<div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
```

Thay đổi `from-pink-50 via-purple-50 to-blue-50` với các màu khác.

## 4. Tùy Chỉnh Hình Ảnh & Icons

### Thay Đổi Emoji Icons

Các emoji được sử dụng trong toàn ứng dụng có thể được thay đổi:

```typescript
{/* Emoji hiện tại */}
📩  {/* Mail - Phong bì */}
👋  {/* Hand - Chào */}
✨  {/* Sparkles - Lấp lánh */}
📅  {/* Calendar - Lịch */}
📍  {/* Location - Địa chỉ */}
👔  {/* Tuxedo - Dress code */}
🌻  {/* Sunflower - Hoa */}
🎉  {/* Celebration - Celebration */}
✈️  {/* Plane - Máy bay */}

{/* Emoji rơi trên trang cảm ơn */}
🌸 🌻 🌼 🌺 🌷
```

## 5. Thay Đổi Font & Typography

**Tệp: `app/layout.tsx`**

Hiện tại sử dụng Geist font từ Google Fonts. Để thay đổi:

```typescript
import { Inter, Playfair, Poppins } from 'next/font/google'

const playfair = Playfair({ variable: '--font-serif' })
const poppins = Poppins({ variable: '--font-sans' })
```

## 6. Thêm Âm Nhạc Nền

Nút âm nhạc hiện tại là UI-only. Để thêm âm thanh thật:

1. Thêm file MP3 vào `/public/audio/background.mp3`
2. Cập nhật `components/greeting-page.tsx`:

```typescript
'use client';

import { useState } from 'react';

export function GreetingPage({ onContinue }: GreetingPageProps) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/background.mp3" loop />
      {/* Rest of component */}
    </>
  );
}
```

## 7. Tùy Chỉnh Form

**Tệp: `components/guest-form.tsx`**

```typescript
// Thay đổi labels
<label className="block text-sm font-semibold text-gray-700 mb-2">
  Họ và tên * {/* Đổi label */}
</label>

// Thay đổi placeholder
<input
  placeholder="Nhập họ và tên của bạn" {/* Đổi placeholder */}
/>

// Thay đổi button text
<span>📬 Gửi lời chúc</span> {/* Đổi text & emoji */}
```

## 8. Tùy Chỉnh Trang Cảm Ơn

**Tệp: `components/thank-you-page.tsx`**

```typescript
// Thay đổi tiêu đề
<h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
  Cảm ơn bạn {/* Đổi tiêu đề */}
</h1>

// Thay đổi nội dung
<p>
  Cảm ơn vì đã đồng hành cùng mình trong suốt những năm tháng thanh xuân.
</p>

// Thay đổi thông điệp cuối
<p className="text-lg font-semibold text-purple-600">
  Hẹn gặp bạn trong buổi chụp kỷ yếu nhé! 🌻
</p>
```

## 9. Animations & Effects

### Tốc Độ Animation

**Tệp: `components/invitation-letter.tsx`**

```typescript
// Thay đổi transition delay
transition={{ type: 'spring', stiffness: 300, damping: 30 }}

// stiffness cao = animation nhanh
// damping cao = animation kém responsive
```

### Confetti Settings

**Tệp: `components/thank-you-page.tsx`**

```typescript
confetti({
  particleCount: 100,  // Số lượng confetti
  spread: 70,          // Độ lan rộng
  origin: { y: 0.6 },  // Vị trí xuất phát
});
```

## 10. Responsive Design

Ứng dụng đã được tối ưu cho mobile. Kiểm tra responsive bằng cách:

1. Mở DevTools (F12)
2. Click vào device toggle (Ctrl+Shift+M)
3. Chọn các kích thước khác nhau

Để tùy chỉnh responsive:

```typescript
// Tailwind responsive prefixes
md:text-5xl  {/* Medium screens and up */}
lg:text-6xl  {/* Large screens and up */}
```

## Troubleshooting

### Modal không hiển thị button

Kiểm tra `max-h-[90vh] overflow-y-auto` trong invitation-letter.tsx

### Animations bị giật

Kiểm tra performance:
- Giảm `particleCount` trong confetti
- Giảm số lượng floating particles

### Font không hiển thị đúng

Kiểm tra font imports trong `app/layout.tsx`

## Deploy & Testing

```bash
# Test locally
pnpm dev

# Build production
pnpm build
pnpm start

# Deploy to Vercel
vercel --prod
```

Chúc bạn có một ứng dụng thư mời kỷ yếu tuyệt vời! 🎓✨
