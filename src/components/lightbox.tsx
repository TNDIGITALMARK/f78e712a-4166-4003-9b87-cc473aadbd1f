'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Artwork } from '@/lib/artwork-data';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface LightboxProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export function Lightbox({ artwork, isOpen, onClose, onNext, onPrev }: LightboxProps) {
  if (!artwork) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full p-0 border-0 bg-black">
        <VisuallyHidden>
          <DialogTitle>{artwork.title}</DialogTitle>
        </VisuallyHidden>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white hover:opacity-70 transition-opacity"
          aria-label="Close"
        >
          <X size={32} />
        </button>

        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:opacity-70 transition-opacity"
            aria-label="Previous"
          >
            <ChevronLeft size={48} />
          </button>
        )}

        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:opacity-70 transition-opacity"
            aria-label="Next"
          >
            <ChevronRight size={48} />
          </button>
        )}

        <div className="relative w-full h-[80vh]">
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        <div className="bg-black text-white p-6">
          <h2 className="text-2xl font-medium mb-2">{artwork.title}</h2>
          <p className="text-gray-300 mb-1">{artwork.medium} • {artwork.year}</p>
          <p className="text-gray-400 text-sm">{artwork.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
