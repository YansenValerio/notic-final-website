# Notic Website — Next.js

Website company profile untuk **Notic Plastic Recycler**, dibangun dengan Next.js 14, TypeScript, dan Tailwind CSS.

---

## Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build untuk production
```bash
npm run build
npm start
```

---

## Struktur Folder

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata SEO
│   ├── page.tsx          # Halaman utama (merakit semua komponen)
│   └── globals.css       # Global styles + Tailwind
│
├── components/
│   ├── Navbar.tsx        # Navigasi (sticky, mobile-responsive)
│   ├── Hero.tsx          # Hero section
│   ├── Stats.tsx         # Impact statistics
│   ├── Products.tsx      # Grid produk
│   ├── Process.tsx       # Langkah proses daur ulang
│   ├── About.tsx         # Tentang Notic
│   ├── Testimonials.tsx  # Testimoni pelanggan
│   ├── CTABanner.tsx     # Call to action
│   ├── Footer.tsx        # Footer dengan link
│   └── ScrollReveal.tsx  # Animasi scroll (client component)
│
├── data/
│   ├── products.ts       # Data produk — edit di sini untuk tambah produk
│   ├── testimonials.ts   # Data testimoni — edit di sini untuk tambah review
│   └── content.ts        # Stats dan langkah proses
│
└── lib/
    └── utils.ts          # Konstanta URL (WhatsApp, Instagram, Email)
```

---

## Yang Perlu Diganti

### 1. Nomor WhatsApp & Kontak
Edit file `src/lib/utils.ts`:
```ts
export const WHATSAPP_URL = 'https://wa.me/628XXXXXXXXXX' // ganti nomor
export const INSTAGRAM_URL = 'https://instagram.com/notic_id'
export const EMAIL = 'hello@notic.id'
```

### 2. Foto Produk
- Simpan foto di folder `public/images/products/`
- Di `src/data/products.ts`, tambahkan field `image: '/images/products/nama-foto.jpg'`
- Di `src/components/Products.tsx`, ganti bagian placeholder dengan komponen `<Image>` dari Next.js:
```tsx
import Image from 'next/image'
// ...
<Image src={product.image} alt={product.name} fill className="object-cover" />
```

### 3. Data Produk & Testimoni
- Tambah/edit produk di `src/data/products.ts`
- Tambah/edit testimoni di `src/data/testimonials.ts`
- Ubah angka impact di `src/data/content.ts`

### 4. Foto Hero & About
Di masing-masing komponen, cari komentar:
```tsx
{/* Ganti dengan: <Image ... /> */}
```
dan ganti dengan komponen `<Image>` yang sesuai.

---

## Deploy ke Vercel (Gratis)

1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com) → Import project
3. Vercel otomatis mendeteksi Next.js — klik **Deploy**
4. Hubungkan domain `notic.id` di settings Vercel

---

## Tech Stack

- **Next.js 14** — App Router
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **Google Fonts** — DM Serif Display + DM Sans
