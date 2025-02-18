'use client';

import { motion } from 'framer-motion';
import Heading from '@/components/shared/Heading';
import Image from 'next/image';

const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
            opacity: 1,
            transition: {
                  staggerChildren: 0.4,
            },
      },
};

const textVariants = {
      hidden: { opacity: 0, y: 15 },
      visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeInOut' },
      },
};

const ProductOverview = () => {
      return (
            <div className="bg-[#F6E9A4] py-20 text-[#4c839a]">
                  <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end h-full">
                              <div className="order-last flex items-center justify-center h-full">
                                    <Image
                                          width={500}
                                          height={500}
                                          loading="lazy"
                                          alt="image"
                                          className="w-[80%] md:w-[50%]"
                                          src="/overview.png"
                                    />
                              </div>

                              {/* Text section with stagger animations */}
                              <motion.div
                                    className="space-y-5 text-center md:text-start"
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={containerVariants}
                                    viewport={{ once: false, amount: 0.5 }}
                              >
                                    <motion.div variants={textVariants}>
                                          <Heading className="text-[#8B5528]">
                                                From First Bites to <br /> Growing Appetites
                                          </Heading>
                                    </motion.div>

                                    <motion.p className="text-lg font-medium text-[#8B5528]" variants={textVariants}>
                                          Cove Valley Organics isn’t just baby food—it’s a meal solution designed to
                                          grow with your child. Our versatile products are crafted to adapt from purees
                                          for little ones just starting on solids to serving as a nutritious base for
                                          recipes as they grow. In the early months, our purees offer wholesome, simple
                                          ingredient options perfect for introducing natural flavours and textures. But
                                          as your baby transitions into a toddler, Cove Valley cubes become a
                                          time-saving way to enhance a variety of family-friendly meals. Whether added
                                          to smoothies, stirred into oatmeal, or mixed into pancake batter, our cubes
                                          inspire new ways to introduce essential nutrients, supporting parents in
                                          building lifelong healthy eating habits for their children. Cove Valley
                                          transforms mealtime into an opportunity for creativity, making it easy to
                                          provide fresh, nutritious foods as your child grows.
                                    </motion.p>
                              </motion.div>
                        </div>
                  </div>
            </div>
      );
};

export default ProductOverview;
