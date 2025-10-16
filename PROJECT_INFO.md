# Alexandra Chen Art - Artist Portfolio

A stunning, minimalist artist portfolio website showcasing contemporary artwork across multiple mediums.

## Features

### 🎨 **Homepage**
- Hero section with featured artwork
- Gallery grid showcasing diverse pieces
- Featured services section (Commissions, Originals, Exhibitions)
- Call-to-action for visitor engagement

### 🖼️ **Gallery Page**
- Complete artwork collection
- Filterable by medium (Oil on Canvas, Watercolor, Photography, etc.)
- Responsive grid layout
- Click-to-view lightbox with navigation

### 👤 **About Page**
- Artist biography and background
- Artist statement
- Exhibition timeline
- Contact information

### 📧 **Contact Page**
- Contact form for inquiries
- Service offerings
- Direct contact details (Email, Instagram, Location)

## Design System

### Color Palette
- **Primary**: White (#FFFFFF) and Black (#000000)
- **Grays**: Various shades for depth (#F5F5F5, #666666)
- Clean, minimalist aesthetic that lets artwork shine

### Typography
- **Headings**: Bold, uppercase for impact
- **Body**: Clean, readable sans-serif
- **Tracking**: Wide letter-spacing for elegance

### Layout Principles
- Generous white space
- Gallery-like presentation
- Responsive grid systems
- Smooth hover interactions
- Mobile-first approach

## Technology Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Images**: Next.js Image Optimization
- **TypeScript**: Full type safety

## Artwork Data Structure

All artwork is stored in `/src/lib/artwork-data.ts` with the following schema:

```typescript
interface Artwork {
  id: string;
  title: string;
  medium: string;
  year: number;
  imageUrl: string;
  description: string;
  featured?: boolean;
}
```

## Key Components

- **Navigation**: Responsive top navigation with mobile menu
- **Footer**: Social links and copyright information
- **ArtworkCard**: Hover-reveal card with artwork details
- **Lightbox**: Full-screen artwork viewer with navigation
- **Contact Form**: Functional contact form with validation

## Pages

1. **Home** (`/`) - Hero and featured gallery
2. **Gallery** (`/gallery`) - Complete artwork collection
3. **About** (`/about`) - Artist information and biography
4. **Contact** (`/contact`) - Contact form and information

## Responsive Design

- **Mobile**: Optimized touch interactions, stacked layouts
- **Tablet**: Adjusted grid columns, readable typography
- **Desktop**: Full multi-column layouts, hover effects

## Image Optimization

All images are optimized through Next.js Image component:
- Automatic format selection (WebP when supported)
- Responsive images with `sizes` attribute
- Lazy loading by default
- Priority loading for above-fold images

## Customization

To customize for a different artist:

1. Update artist info in `/src/lib/artwork-data.ts`
2. Replace images in `/public/generated/`
3. Adjust color scheme in `/src/app/globals.css`
4. Modify navigation links in `/src/components/navigation.tsx`

## Performance Features

- Server-side rendering where possible
- Optimized images with Next.js Image
- Minimal JavaScript bundle
- CSS-based animations
- Fast page transitions

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Alt text on all images
- Sufficient color contrast

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement approach

## Future Enhancements

Potential additions for future versions:
- E-commerce integration for artwork sales
- Blog or news section
- Email newsletter signup
- Virtual exhibition spaces
- Video content support
- Multi-language support

---

Built with care for artists who want a professional, elegant online presence.
