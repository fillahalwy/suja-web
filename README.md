# Suja Web - Landing Page Profesional dengan Tailwind CSS

**📚 UTS Mata Kuliah: Digital Business**

Sebuah landing page profesional untuk layanan pembuatan website dan solusi digital terintegrasi yang dibangun dengan **Tailwind CSS v3.4.1** - framework CSS utility-first terbaru.

## 👥 Anggota Kelompok UTS Digital Business

| No. | Nama | NIM |
|-----|------|-----|
| 1 | Ahmad Fillah Alwy | 23.11.5794 |
| 2 | Bagas Ridho Ilhami | 23.11.5781 |
| 3 | Harpan Esa Sairi | 23.11.5766 |
| 4 | Febrio Pasha Arwanda | 23.11.5673 |

---

## Cara Menggunakan

### Metode 1: Quick Start (Tanpa Instalasi)

**Cara paling mudah untuk preview:**

1. Clone atau download repository ini
2. Buka file `index.html` dengan:
   - Double-click langsung di browser, atau
   - Klik kanan → Open with → Browser pilihan Anda
3. Tailwind CSS sudah included via CDN, semua fitur langsung berfungsi!

**Alternatif - Gunakan Live Server:**
- Install extension `Live Server` di VS Code
- Klik kanan pada `index.html` → `Open with Live Server`
- Browser otomatis membuka dengan live reload

### Metode 2: Development Setup (dengan Node.js)

Jika ingin mengembangkan lebih lanjut atau build untuk production:

1. **Install Node.js** (jika belum ada) - [nodejs.org](https://nodejs.org)

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Development mode** (auto-compile CSS saat ada perubahan):
   ```bash
   npm run dev
   ```
   - Tailwind akan watch file `src/css/input.css` dan auto-generate ke `src/css/output.css`

4. **Build untuk production** (minified & optimized):
   ```bash
   npm run build
   ```
   - Menghasilkan CSS yang sudah di-minify untuk production

5. **Update HTML untuk production** (optional):
   - Ganti CDN Tailwind dengan local CSS file:
   ```html
   <!-- Remove CDN -->
   <!-- <script src="https://cdn.tailwindcss.com"></script> -->
   
   <!-- Add local CSS -->
   <link rel="stylesheet" href="src/css/output.css">
   ```

## 🔧 Customization

### Mengubah Warna Tema
Edit di `tailwind.config.js`:
```javascript
theme: {
    extend: {
        colors: {
            'primary-green': '#your-color',
            'dark-gray': '#your-color',
            'light-gray': '#your-color',
        }
    }
}
```

### Mengubah Teks
Edit langsung di file `index.html` untuk mengubah:
- Nama perusahaan
- Deskripsi layanan
- Harga paket
- Testimonial

### Menambah Custom Classes
Di `input.css`, dalam `@layer components`:
```css
@layer components {
    .custom-button {
        @apply px-6 py-3 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition-all;
    }
}
```

### Responsive Design
Gunakan Tailwind breakpoints di class:
```html
<!-- Hidden pada mobile, visible pada md+ -->
<div class="hidden md:block"></div>

<!-- Responsive text size -->
<h1 class="text-2xl md:text-4xl lg:text-5xl"></h1>
```

Breakpoints yang tersedia:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## Tech Stack & Tools

- **HTML5** - Semantic markup
- **Tailwind CSS v3.4.1** - Utility-first CSS framework
- **JavaScript Vanilla** - Smooth scrolling & interaktivitas
- **Font Awesome 6.4.0** - Icon library
- **PostCSS** - CSS processor
- **Autoprefixer** - CSS vendor prefixes

Untuk informasi lebih lengkap tentang setup Tailwind CSS, lihat `TAILWIND_SETUP.md`

---

## How to Run

Clone repository:
```bash
git clone <repository-url>
cd suja-web
npm install
npm run dev
```

**Created by Team Suja Web**

**Mata Kuliah:** Digital Business (UTS)  
**Dosen Pengampu:** Eli Pujastuti  
**Semester:** 6  
**Tahun Akademik:** 2026
