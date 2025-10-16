'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Artwork } from '@/lib/artwork-data';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick?: () => void;
}

export function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300">
            <div className="text-center text-white p-4">
              <h3 className="font-medium text-lg mb-1">{artwork.title}</h3>
              <p className="text-sm opacity-90">{artwork.medium}</p>
              <p className="text-sm opacity-90">{artwork.year}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
