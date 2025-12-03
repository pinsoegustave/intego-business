'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

// Error boundary component for image loading
const ImageWithFallback = ({ src, alt, className, onError, onLoad }: {
  src: string;
  alt: string;
  className: string;
  onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad: () => void;
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImgSrc('/placeholder.jpg'); // Fallback image path
    onError(e);
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={className}
      priority
      onError={handleError}
      onLoad={onLoad}
    />
  );
};

const heroImages = [
  {
    src: '/meeting.png',
    alt: 'Business Meeting',
    title: 'Streamlined Digital Services',
    description: 'Access government services with ease through our integrated solutions'
  },
  {
    src: '/law.png',
    alt: 'Legal Services',
    title: 'Tax & Revenue Solutions',
    description: 'Comprehensive tax services in partnership with RRA'
  },
  {
    src: '/browser.png',
    alt: 'Digital Solutions',
    title: 'Expert Business Guidance',
    description: 'Strategic solutions for your business growth and development'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setError('Failed to load image');
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setError(null);
  };

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      heroImages.forEach((image) => {
        const img = new window.Image();
        img.src = image.src;
      });
    };
    preloadImages();
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
      setIsLoading(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = heroImages[currentSlide];

  return (
    <section className='relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#034833]'>
      {/* Animated Background */}
      <div className='absolute inset-0 z-0 overflow-hidden'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: error ? 0.05 : 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='absolute inset-0'
          >
            <div className='relative w-full h-full'>
              <ImageWithFallback
                src={currentImage.src}
                alt={currentImage.alt}
                className='object-cover w-full h-full'
                onError={handleImageError}
                onLoad={handleImageLoad}
              />
              
              {/* Loading Spinner */}
              {isLoading && !error && (
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30'>
                  <div className='w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin'></div>
                </div>
              )}
              
              {/* Error Fallback */}
              {error && (
                <div className='absolute inset-0 flex items-center justify-center bg-gray-800'>
                  <div className='text-center p-4'>
                    <div className='text-white text-lg mb-2'>Image unavailable</div>
                    <div className='text-gray-300 text-sm'>{currentImage.alt}</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='max-w-4xl mx-auto'
        >
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight'>
            Transforming Business in Rwanda
            <span className='block text-green-400 mt-4'>With Digital Excellence</span>
          </h1>
          
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className='mb-8'
            >
              <h2 className='text-xl sm:text-2xl text-green-200 font-medium mb-2'>{heroImages[currentSlide].title}</h2>
              <p className='text-gray-100 text-sm sm:text-base max-w-2xl mx-auto'>
                {heroImages[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className='flex flex-col sm:flex-row justify-center gap-4 mt-8'>
            <Button 
              type='button'
              title='Our Services'
              variant='btn_white'
              icon='arrow-right'
            />
            <Button 
              type='button'
              title='Contact Us'
              variant='btn_outline_white'
              icon='phone'
            />
          </div>
        </motion.div>

        {/* Slide Indicators */}
        <div className='flex justify-center mt-12 space-x-2'>
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <div className='animate-bounce flex flex-col items-center'>
          <span className='text-sm text-white mb-2'>Scroll Down</span>
          <svg
            className='w-6 h-6 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
