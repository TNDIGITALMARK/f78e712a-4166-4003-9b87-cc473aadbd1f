# Alexandra Chen Art - Artist Portfolio

A stunning, minimalist artist portfolio website built with Next.js 15, showcasing contemporary artwork across multiple mediums.

## 🎨 Features

- **Homepage**: Hero section with featured artwork and gallery grid
- **Gallery**: Filterable artwork collection with lightbox viewer
- **About**: Artist biography, statement, and exhibition history
- **Contact**: Contact form and direct communication channels
- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance**: Next.js Image optimization and server-side rendering

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:4006](http://localhost:4006) to view the site.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx           # Homepage
│   ├── gallery/           # Gallery page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/
│   ├── navigation.tsx     # Header navigation
│   ├── footer.tsx         # Footer component
│   ├── artwork-card.tsx   # Gallery card
│   └── lightbox.tsx       # Image viewer
└── lib/
    └── artwork-data.ts    # Artwork content
```

## 🎯 Customization

1. **Update Content**: Edit `/src/lib/artwork-data.ts`
2. **Add Artwork**: Place images in `/public/generated/`
3. **Styling**: Modify `/src/app/globals.css`
4. **Navigation**: Update `/src/components/navigation.tsx`

## 🛠️ Technology Stack

- Next.js 15.5.2
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI Components
- Lucide Icons

## 📝 License

Built for artists who want an elegant, professional online presence.

---

For detailed information, see [PROJECT_INFO.md](./PROJECT_INFO.md)
