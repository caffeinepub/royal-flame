import { useState } from 'react';
import { GalleryLightbox } from '../GalleryLightbox';

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: '/assets/generated/gallery-1.dim_1400x1050.jpg', alt: 'Elegant dining room' },
    { src: '/assets/generated/gallery-2.dim_1400x1050.jpg', alt: 'Plating detail' },
    { src: '/assets/generated/gallery-3.dim_1400x1050.jpg', alt: 'Chef at grill' },
    { src: '/assets/generated/gallery-4.dim_1400x1050.jpg', alt: 'Table setting' },
    { src: '/assets/generated/gallery-5.dim_1400x1050.jpg', alt: 'Cocktail presentation' },
    { src: '/assets/generated/gallery-6.dim_1400x1050.jpg', alt: 'Dessert close-up' }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Gallery
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A glimpse into the Royal Flame experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      <GalleryLightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </section>
  );
}
