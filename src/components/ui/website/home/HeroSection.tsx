'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/shared/Navbar';

const backgroundVariants = {
      hidden: { opacity: 0, y: -50, scale: 1.4 },
      visible: {
            opacity: 1,
            y: 0,
            scale: 1.3,
            transition: {
                  duration: 1.5,
                  ease: 'easeInOut',
            },
      },
};

const productVariants = {
      hidden: { opacity: 0, y: 100 },
      visible: {
            opacity: 1,
            y: 0,
            transition: {
                  duration: 1.5,
                  delay: 0.5,
                  ease: 'easeInOut',
            },
      },
};

export default function HeroSection() {
      return (
            <div>
                  <div className="bg-[#F16763] h-screen">
                        <Navbar />

                        <div className="z-[-0] container overflow-hidden -mt-[72px] md:-mt-[88px] relative flex flex-col justify-center items-center h-full">
                              {/* Background image with smoother scaling and movement */}
                              <motion.img
                                    loading="lazy"
                                    src="/hero-inside.png"
                                    alt=""
                                    initial="hidden"
                                    animate="visible"
                                    variants={backgroundVariants}
                              />

                              {/* Foreground product image with smooth fade-in and slide-up */}
                              <motion.img
                                    loading="lazy"
                                    className="absolute w-[65%] mx-auto drop-shadow-2xl"
                                    src="/baby-product.png"
                                    alt=""
                                    initial="hidden"
                                    animate="visible"
                                    variants={productVariants}
                              />
                        </div>
                  </div>
            </div>
      );
}
