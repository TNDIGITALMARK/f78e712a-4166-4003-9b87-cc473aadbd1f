'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ArtworkCard } from '@/components/artwork-card';
import { Lightbox } from '@/components/lightbox';
import { artworkData } from '@/lib/artwork-data';

export default function HomePage() {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworkData[0] | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const featuredArtwork = artworkData.filter(art => art.featured);
  const heroArtwork = artworkData[0];

  const handleArtworkClick = (artwork: typeof artworkData[0]) => {
    setSelectedArtwork(artwork);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    if (!selectedArtwork) return;
    const currentIndex = artworkData.findIndex(art => art.id === selectedArtwork.id);
    const nextIndex = (currentIndex + 1) % artworkData.length;
    setSelectedArtwork(artworkData[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedArtwork) return;
    const currentIndex = artworkData.findIndex(art => art.id === selectedArtwork.id);
    const prevIndex = (currentIndex - 1 + artworkData.length) % artworkData.length;
    setSelectedArtwork(artworkData[prevIndex]);
  };

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                CREATING WORLDS<br />
                THROUGH<br />
                COLOR AND FORM
              </h1>
              <Link
                href="/gallery"
                className="inline-block text-sm tracking-wider hover:opacity-70 transition-opacity underline"
              >
                VIEW ARTWORK
              </Link>
            </div>

            {/* Hero Image */}
            <div
              className="relative aspect-[3/2] cursor-pointer group overflow-hidden"
              onClick={() => handleArtworkClick(heroArtwork)}
            >
              <Image
                src={heroArtwork.imageUrl}
                alt={heroArtwork.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Featured Gallery Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {artworkData.slice(1, 9).map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                onClick={() => handleArtworkClick(artwork)}
              />
            ))}
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center text-2xl font-medium mb-12 tracking-wide">
              FEATURED SERVICES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium tracking-wider">COMMISSIONS</h3>
                <p className="text-sm text-gray-600">
                  Custom artwork tailored to your vision and space
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15L16 10L5 21" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium tracking-wider">ORIGINALS</h3>
                <p className="text-sm text-gray-600">
                  One-of-a-kind pieces available for purchase
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16Z" />
                    <path d="M7 6V4" />
                    <path d="M17 6V4" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium tracking-wider">EXHIBITIONS</h3>
                <p className="text-sm text-gray-600">
                  Gallery shows and public displays of current work
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-medium tracking-wide">
              READY TO START YOUR ART JOURNEY?
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-3 text-sm tracking-wider hover:bg-gray-800 transition-colors"
            >
              GET IN TOUCH
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <Lightbox
        artwork={selectedArtwork}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}
