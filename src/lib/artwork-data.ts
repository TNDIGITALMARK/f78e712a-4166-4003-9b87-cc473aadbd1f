export interface Artwork {
  id: string;
  title: string;
  medium: string;
  year: number;
  imageUrl: string;
  description: string;
  featured?: boolean;
}

export const artworkData: Artwork[] = [
  {
    id: '1',
    title: 'Blue Vortex',
    medium: 'Oil on Canvas',
    year: 2024,
    imageUrl: '/generated/hero-abstract-painting.png',
    description: 'An explosive abstract expressionist piece exploring the dynamic interplay of blue and orange.',
    featured: true
  },
  {
    id: '2',
    title: 'Renaissance Portrait',
    medium: 'Oil on Canvas',
    year: 2024,
    imageUrl: '/generated/portrait-oil-painting.png',
    description: 'Classical portrait technique with contemporary sensibility.',
    featured: true
  },
  {
    id: '3',
    title: 'Tranquil Waters',
    medium: 'Oil on Canvas',
    year: 2024,
    imageUrl: '/generated/landscape-sunset.png',
    description: 'Impressionist landscape capturing the serenity of nature at dusk.',
    featured: true
  },
  {
    id: '4',
    title: 'Geometric Harmony',
    medium: 'Mixed Media',
    year: 2024,
    imageUrl: '/generated/abstract-geometric.png',
    description: 'Modern minimalist composition exploring color and form.'
  },
  {
    id: '5',
    title: 'Urban Perspectives',
    medium: 'Photography',
    year: 2023,
    imageUrl: '/generated/urban-street-bw.png',
    description: 'Architectural photography capturing the essence of urban solitude.'
  },
  {
    id: '6',
    title: 'Flight',
    medium: 'Ink on Paper',
    year: 2023,
    imageUrl: '/generated/bird-ink-drawing.png',
    description: 'Minimalist ink drawing embodying freedom and grace.'
  },
  {
    id: '7',
    title: 'Ocean Dreams',
    medium: 'Watercolor',
    year: 2024,
    imageUrl: '/generated/watercolor-ocean.png',
    description: 'Fluid watercolor exploration of oceanic movement and color.'
  },
  {
    id: '8',
    title: 'Ceramic Collection',
    medium: 'Ceramic Sculpture',
    year: 2023,
    imageUrl: '/generated/ceramic-pottery.png',
    description: 'Handcrafted pottery celebrating traditional artisan techniques.'
  }
];

export const artistInfo = {
  name: 'Alexandra Chen',
  tagline: 'Creating Worlds Through Color and Form',
  bio: `Alexandra Chen is a contemporary artist working across multiple mediums including oil painting, watercolor, ceramics, and mixed media. Her work explores the intersection of abstract expressionism and classical technique, creating pieces that resonate with both emotional depth and technical mastery.

Based in the Pacific Northwest, Alexandra draws inspiration from the natural landscapes surrounding her studio, as well as urban environments and human emotion. Her work has been featured in galleries across North America and is held in private collections internationally.`,

  statement: `My artistic practice is rooted in the belief that color and form possess an innate language that transcends words. Through each piece, I seek to create portals into emotional landscapes—spaces where viewers can lose themselves and find new perspectives.

Whether working with the bold strokes of oil paint, the delicate transparency of watercolor, or the tactile nature of clay, I approach each medium with curiosity and respect for its unique voice. My work is an ongoing dialogue between control and spontaneity, tradition and innovation.`,

  exhibitions: [
    { year: 2024, title: 'Color Narratives', venue: 'Seattle Contemporary Gallery' },
    { year: 2023, title: 'Form & Flow', venue: 'Portland Art Museum' },
    { year: 2023, title: 'Mixed Perspectives', venue: 'Vancouver Gallery Collective' },
    { year: 2022, title: 'Emerging Voices', venue: 'San Francisco Art Institute' }
  ],

  contact: {
    email: 'hello@alexandrachen.art',
    instagram: '@alexandrachenart',
    location: 'Seattle, WA'
  }
};
