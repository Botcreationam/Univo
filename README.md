# UNIVO — Empowering Students Beyond The Classroom

> A premium, student-focused digital platform connecting students with educational opportunities, career guidance, scholarships, innovation programs, and community support.

## 🚀 Live Demo

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Botcreationam/Univo)

## ✨ Features

- **Hero Section** — Animated headline with floating particles and cursor-follow effects
- **About Section** — Mission, vision, values, and animated timeline
- **Services** — 6 core student services with hover animations
- **Impact Stats** — Animated count-up statistics
- **Platform Features** — Alternating feature blocks with scroll animations
- **Student Testimonials** — Auto-playing glassmorphism carousel
- **Vision Roadmap** — 4-phase animated expansion roadmap
- **Contact Form** — Animated form with validation
- **Dark / Light Mode** — Full theme support
- **SEO Optimized** — Full metadata, OpenGraph, and Twitter cards
- **Fully Responsive** — Mobile-first design

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| GSAP | Advanced animations |
| next-themes | Dark/Light mode |
| Lucide React | Icons |

## 🎨 Design System

- **Primary:** Deep Navy `#071A35`
- **Secondary:** Electric Blue `#2563EB`
- **Accent:** Cyan `#06B6D4`
- **Dark Mode:** Fully supported
- **Light Mode:** Fully supported

## 📁 Project Structure

```
univobs/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with SEO metadata
│   │   ├── page.tsx          # Main homepage
│   │   └── globals.css       # Global styles + Tailwind theme
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # Sticky nav with dark mode toggle
│   │   │   └── Footer.tsx    # Footer with social links
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ImpactSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── VisionSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── providers/
│   │       └── ThemeProvider.tsx
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                   # Static assets
├── vercel.json               # Vercel deployment config
└── next.config.ts            # Next.js config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/Botcreationam/Univo.git
cd Univo

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click Deploy
5. Your site is live in ~2 minutes

### Environment Variables

No environment variables required for the base setup.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 📄 License

This project is licensed under the GPL-3.0 License — see the [LICENSE](LICENSE) file.

---

Built with ❤️ for students across Africa and beyond.
