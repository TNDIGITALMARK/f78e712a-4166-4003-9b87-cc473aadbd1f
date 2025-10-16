'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ArtworkCard } from '@/components/artwork-card';
import { Lightbox } from '@/components/lightbox';
import { artworkData } from '@/lib/artwork-data';

export default function GalleryPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworkData[0] | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [filterMedium, setFilterMedium] = useState<string>('All');

  const mediums = ['All', ...Array.from(new Set(artworkData.map(art => art.medium)))];

  const filteredArtwork = filterMedium === 'All'
    ? artworkData
    : artworkData.filter(art => art.medium === filterMedium);

  const handleArtworkClick = (artwork: typeof artworkData[0]) => {
    setSelectedArtwork(artwork);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    if (!selectedArtwork) return;
    const currentIndex = filteredArtwork.findIndex(art => art.id === selectedArtwork.id);
    const nextIndex = (currentIndex + 1) % filteredArtwork.length;
    setSelectedArtwork(filteredArtwork[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedArtwork) return;
    const currentIndex = filteredArtwork.findIndex(art => art.id === selectedArtwork.id);
    const prevIndex = (currentIndex - 1 + filteredArtwork.length) % filteredArtwork.length;
    setSelectedArtwork(filteredArtwork[prevIndex]);
  };

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            GALLERY
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore a curated collection of artwork spanning multiple mediums and styles.
          </p>
        </section>

        {/* Filter Buttons */}
        <section className="max-w-7xl mx-auto px-6 pb-8">
          <div className="flex flex-wrap gap-3">
            {mediums.map((medium) => (
              <button
                key={medium}
                onClick={() => setFilterMedium(medium)}
                className={`px-4 py-2 text-sm tracking-wider transition-colors ${
                  filterMedium === medium
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {medium.toUpperCase()}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredArtwork.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                onClick={() => handleArtworkClick(artwork)}
              />
            ))}
          </div>

          {filteredArtwork.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No artwork found in this category.</p>
            </div>
          )}
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
