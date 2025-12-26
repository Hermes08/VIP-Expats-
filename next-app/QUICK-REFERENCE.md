# 🎯 Quick Reference - VIP Expats Next.js

## 🚀 Common Commands

```bash
# Development
npm run dev              # Start dev server at localhost:3000
npm run build            # Create production build
npm start                # Start production server
npm run lint             # Run ESLint

# Git Workflow
git status               # Check current changes
git add .                # Stage all changes
git commit -m "message"  # Commit with message
git push                 # Push to GitHub

# Deployment
vercel                   # Deploy to Vercel (if CLI installed)
```

## 📁 Key Files & Directories

| Path | Purpose |
|------|---------|
| `app/` | Next.js pages and routes |
| `components/` | Reusable React components |
| `lib/constants.ts` | Site content and configuration |
| `lib/supabase.ts` | Database client |
| `public/` | Static assets (images, fonts) |
| `.env.local` | Environment variables (not in Git) |

## 🔧 Environment Variables

Required in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
```

## 🌐 Important URLs

- **Local Dev**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin
- **Supabase Dashboard**: https://app.supabase.com
- **Vercel Dashboard**: https://vercel.com/dashboard

## 📝 Content Editing

### Via Admin Panel (`/admin`)
- Edit page content dynamically
- Upload images
- Manage projects and blog posts

### Via Code (`lib/constants.ts`)
- Update static content
- Modify navigation
- Change color schemes

## 🎨 Styling

- **Global Styles**: `app/globals.css`
- **Tailwind Config**: `tailwind.config.ts`
- **Component Styles**: Inline Tailwind classes

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Build errors | Run `npm run build` to see details |
| Missing modules | Run `npm install` |
| Port in use | Kill process on port 3000 or use different port |
| Supabase errors | Check `.env.local` credentials |

## 📚 Documentation

- **Full README**: See `README.md`
- **Setup Guide**: See `SETUP-GUIDE.md`
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

---

**Pro Tip**: Bookmark this file for quick access to common commands and references!
