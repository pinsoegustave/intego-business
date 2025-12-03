'use client';

import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Story() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <motion.div 
                variants={fadeIn}
                className="relative rounded-xl overflow-hidden h-80 hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV1ZGF8fHx8fHw%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Modern office workspace"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  style={{ borderRadius: '0.75rem' }}
                />
              </motion.div>
              <motion.div 
                variants={fadeIn}
                className="ml-8 relative rounded-xl overflow-hidden h-64 hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Business growth chart"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  style={{ borderRadius: '0.75rem' }}
                />
              </motion.div>
            </div>
            <div className="space-y-6 pt-12">
              <motion.div 
                variants={fadeIn}
                className="bg-gradient-to-r from-[#034833] to-[#0a5a45] text-white p-6 rounded-xl h-40 flex flex-col justify-center items-center text-center hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-5xl font-bold">2+</span>
                <p className="text-xl font-medium mt-2">Years of Excellence</p>
                <p className="text-sm opacity-90 mt-1">Delivering Results</p>
              </motion.div>
              <motion.div 
                variants={fadeIn}
                className="relative rounded-xl overflow-hidden h-80 hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Financial documents and calculator"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  style={{ borderRadius: '0.75rem' }}
                />
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <motion.div 
            variants={fadeIn}
            className="max-w-2xl mx-auto lg:mx-0"
          >
            <span className="inline-block text-sm font-semibold text-[#034833] uppercase tracking-wider mb-3">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Where Innovation Meets{' '}
              <span className="text-[#034833]">Business Excellence</span>
            </h2>
            <div className="space-y-5 text-gray-600">
              <p>
                Established with a vision to redefine business consultancy, Intego Business Solutions has quickly become 
                a trusted partner for businesses seeking strategic growth. In just two years, we've helped numerous 
                clients navigate complex financial landscapes and achieve their business objectives.
              </p>
              <p>
                Our approach combines cutting-edge financial strategies with deep industry knowledge, delivering 
                customized solutions that drive real results. From startups to established enterprises, we provide 
                the expertise and support needed to thrive in today's competitive market.
              </p>
              <div className="pt-4">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <a 
                    href="/contact" 
                    className="bg-[#034833] text-white px-6 py-3 rounded-full font-medium hover:bg-[#023527] transition-colors inline-flex items-center"
                  >
                    Learn More About Us
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
