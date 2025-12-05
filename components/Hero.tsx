'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

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
  
  // Auto-advance slides with smooth timing
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 6000); // Increased from 5000ms to 6000ms for better readability
    
    return () => clearInterval(timer);
  }, []);
  return (
    <section className='padding-container flex flex-col items-center justify-center min-h-screen py-16 md:py-24 lg:py-32 relative overflow-hidden'>
        <div className='absolute inset-0 z-0'>
            <Image 
            src="frame.svg"
            alt='hero-image'
            // width={100}
            // height={100}
            fill
            className='w-full h-full object-cover bg-[#034833]'
            priority
        />
        </div>
        
         {/*Middle text  */}
        <div className='relative w-full max-w-6xl mx-auto px-4 min-h-[24rem] flex items-center'>
          <AnimatePresence mode='wait' custom={currentSlide}>
            <motion.div
              key={currentSlide}
              custom={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }}
              exit={{ 
                opacity: 0, 
                x: -100,
                transition: { 
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }}
              className='w-full flex flex-col items-center justify-center text-center relative z-10'
            >
              <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight'>
                {heroImages[currentSlide].title}
              </h1>
              <p className='text-xl text-green-100 max-w-3xl mx-auto'>
                {heroImages[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-center gap-4 mt-8 relative z-10'>
          <Button 
            type='button'
            title='Our Services'
            variant='btn_white'
            icon='arrow-right'
          />
          <Button 
            type='button'
            title='Contact Us'
            variant='btn_outline_green'
            icon='phone'
          />
        </div>
        
    </section>
  )
}
