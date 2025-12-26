# VIP Expats - ExpatRockstars

> **Premium real estate platform for international investors seeking high-yield opportunities in Panama**

A modern, SEO-optimized Next.js application showcasing luxury real estate developments, investment opportunities, and relocation services for the global elite.

---

## 🌟 Features

- **🏝️ Curated Portfolio**: High-liquidity Panama branded residences and beachfront assets
- **🌐 Multilingual Support**: English and Spanish content with seamless language switching
- **📱 Responsive Design**: Premium, mobile-first UI with glassmorphism and modern aesthetics
- **🎨 3D Animations**: Three.js particle effects and smooth Framer Motion transitions
- **🔐 Admin CMS**: Supabase-powered content management system
- **⚡ Server-Side Rendering**: Optimized for SEO and Google ranking
- **🎯 Lead Generation**: Integrated lead magnet and contact forms
- **📊 Investment Intelligence**: Real-time market data and ROI calculators

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn**

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── admin/             # Admin CMS dashboard
│   ├── blog/              # Blog listing and posts
│   ├── contacto/          # Contact page
│   ├── proyectos/         # Projects listing and details
│   ├── quiz/              # Investment quiz
│   ├── tours/             # Discovery tours
│   └── layout.tsx         # Root layout with navigation
├── components/            # Reusable React components
│   ├── pages/            # Page-specific content components
│   ├── Footer.tsx        # Site footer
│   ├── Header.tsx        # Navigation header
│   ├── ProjectCard.tsx   # Property card component
│   └── ...
├── context/              # React Context providers
│   ├── CMSContext.tsx    # Supabase CMS integration
│   └── LanguageContext.tsx # i18n language switching
├── lib/                  # Utilities and constants
│   ├── constants.ts      # Site content and data
│   ├── supabase.ts       # Supabase client
│   └── utils.ts          # Helper functions
└── public/               # Static assets (images, fonts)
```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Database**: [Supabase](https://supabase.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

---

## 🎨 Design Philosophy

This application follows modern web design best practices:

- **Premium Aesthetics**: Vibrant gradients, glassmorphism, and dark mode
- **Micro-animations**: Smooth transitions and hover effects for enhanced UX
- **Typography**: Custom Google Fonts (Inter, Outfit) for professional appearance
- **SEO-First**: Semantic HTML, meta tags, and SSR for optimal search ranking
- **Performance**: Optimized images, lazy loading, and code splitting

---

## 🌍 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 📝 Content Management

The admin panel (`/admin`) allows authorized users to:

- ✏️ Edit page content dynamically
- 📸 Upload and manage images
- 🏗️ Add/update property listings
- 📰 Publish blog posts
- 🌐 Manage multilingual content

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

This is a standard Next.js application and can be deployed to any platform supporting Node.js:

- **Netlify**: `npm run build && npm start`
- **AWS Amplify**: Auto-detect Next.js configuration
- **Docker**: Use official Next.js Docker image

---

## 📄 License

This project is proprietary software for VIP Expats / ExpatRockstars.

---

## 🤝 Contributing

This is a private commercial project. For inquiries, contact the development team.

---

## 📧 Contact

**VIP Expats - ExpatRockstars**  
Premium Real Estate & Relocation Services  
Panama City, Panama

---

**Built with ❤️ for the global elite seeking their Panama dream**
