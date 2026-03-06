# Eric Sia - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4, featuring smooth animations and a clean, professional design.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS v4
- **Smooth Animations**: Framer Motion for fluid page transitions and interactions
- **Responsive Design**: Fully responsive across all devices
- **Glass Morphism UI**: Modern glassmorphism effects and gradients
- **Dynamic Navigation**: Auto-hiding navigation with scroll detection
- **Timeline Experience**: Interactive timeline for work experience
- **Masonry Skills Layout**: Compact, modern skills showcase
- **Project Showcase**: Featured projects with live demo links
- **Contact Section**: Animated contact form with social links
- **SEO Optimized**: Meta tags and semantic HTML
- **Type Safe**: Full TypeScript implementation

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons

### Development
- **Linting**: ESLint
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/SiaDeLong/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
portfolio/
├── public/
│   └── images/          # Static images and assets
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles and Tailwind config
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/
│   │   ├── animations/  # Reusable animation components
│   │   ├── sections/    # Page sections (Hero, About, Skills, etc.)
│   │   └── ui/          # UI components (Navigation, Cards, etc.)
│   └── lib/
│       ├── content.ts   # Portfolio content data
│       └── types.ts     # TypeScript type definitions
├── test/                # Test files
└── package.json
```

## 🎨 Customization

### Update Content

Edit `src/lib/content.ts` to customize:
- Personal information
- Work experience
- Skills and technologies
- Projects
- Contact information

### Modify Styles

- **Colors**: Update Tailwind theme in `src/app/globals.css`
- **Animations**: Adjust Framer Motion variants in component files
- **Layout**: Modify section components in `src/components/sections/`

### Add New Sections

1. Create a new component in `src/components/sections/`
2. Add content type to `src/lib/types.ts`
3. Add content data to `src/lib/content.ts`
4. Import and use in `src/app/page.tsx`

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Eric Sia**
- LinkedIn: [Eric Sia](https://www.linkedin.com/in/eric-sia-b0385a284/)
- GitHub: [@SiaDeLong](https://github.com/SiaDeLong)
- Email: ericsiadelong@outlook.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Next.js](https://nextjs.org/)

---

⭐ Star this repo if you find it helpful!
