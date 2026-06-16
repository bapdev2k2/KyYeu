'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/87b6d505-d73f-4e49-b651-a4e8e16923f0-xnuEX91g90bNP0jdaYo1GMlA1ydOC6.jpg',
    alt: 'Tại sân trường',
    category: 'school',
  },
  {
    id: 2,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f1d462b1-6df0-433a-9a57-53e7fecd61ea-O7DQNb6q6m7aYDPo6u8NaN8FO8WmIZ.jpg',
    alt: 'Chủ đề cảnh sát',
    category: 'theme',
  },
  {
    id: 3,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a3-cze67gS8B7XMCODg7SKUSd7dsMaqtK.jpg',
    alt: 'Selfie mũ hồng',
    category: 'selfie',
  },
  {
    id: 4,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a5-H1xML2qzIC0qc9pqBVZjUe9Imhtroo.jpg',
    alt: 'Portrait ánh tím',
    category: 'portrait',
  },
  {
    id: 5,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ce276e1a-0878-4f94-9f39-10b2c07de445-K9NNhzAh6TihSlKiWrDtExER8Y8HYe.jpg',
    alt: 'Áo dài tại trường',
    category: 'school',
  },
  {
    id: 6,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a1-tkZ9azk0xVqfCC2YLhovEJIz0nPRgr.jpg',
    alt: 'Indoor hồng',
    category: 'casual',
  },
  {
    id: 7,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4-C5mUwuHYaw4shk3zKVF80l7q8r8myc.jpg',
    alt: 'Selfie áo da',
    category: 'selfie',
  },
  {
    id: 8,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a2-QfMq2SNz9QLWxV627bqVBr8SUPzV0N.jpg',
    alt: 'Áo dài sự kiện',
    category: 'event',
  },
  {
    id: 9,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a7fef257-56f6-4fd3-8bb8-03e20dfbd530-75S069BMrtnN697gULPdCR2UJkrkpA.jpg',
    alt: 'Kính mát sao',
    category: 'theme',
  },
];

const categories = [
  { id: 'all', label: 'Tất cả' },
  { id: 'school', label: 'Trường' },
  { id: 'theme', label: 'Chủ đề' },
  { id: 'selfie', label: 'Selfie' },
  { id: 'event', label: 'Sự kiện' },
];

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Bộ Sưu Tập Kỷ Yếu
          </h1>
          <p className="text-lg text-gray-600">
            Những khoảnh khắc đáng nhớ của lớp 12A2
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-pink-200 hover:border-pink-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedImage(image.id)}
                className="cursor-pointer group"
              >
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-3 text-gray-700 font-medium text-sm">{image.alt}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="max-w-4xl w-full max-h-[90vh] relative"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-pink-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                  alt="Full view"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
