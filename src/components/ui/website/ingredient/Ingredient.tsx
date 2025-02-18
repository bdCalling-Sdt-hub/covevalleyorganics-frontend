'use client';

import { motion } from 'framer-motion';
import Button from '@/components/shared/Button';
import Link from 'next/link';

const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
            opacity: 1,
            transition: {
                  staggerChildren: 0.3,
            },
      },
};

const textVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeInOut' },
      },
};

const Ingredient = () => {
      return (
            <div className="bg-[#d1e3b7] py-32">
                  <div className="container grid grid-cols-1 md:grid-cols-2 justify-center gap-10 items-center">
                        <div className="w-full">
                              <img alt="image" className="w-full mx-auto" src="/about.png" />
                        </div>

                        <motion.div
                              className="space-y-5 text-center md:text-start"
                              initial="hidden"
                              whileInView="visible"
                              variants={containerVariants}
                              viewport={{ once: false }}
                        >
                              <div>
                                    <img className="mx-auto md:mx-0 size-24" alt="image" src="/green_leaf.png" />
                              </div>

                              <motion.h2
                                    className="text-3xl md:text-5xl oswald font-medium text-[#657c1e] "
                                    variants={textVariants}
                              >
                                    Wholesome Goodness for Tiny Tastes
                              </motion.h2>

                              <motion.p className="text-[#5e741d] " variants={textVariants}>
                                    Our organic baby food is specially crafted to provide the highest nutritional value
                                    for your little ones. Each product is made from 100% organic fruits and vegetables,
                                    carefully selected and blended into smooth, flavourful purees. They are then
                                    flash-frozen to lock in freshness, nutrients, and taste, making them a convenient
                                    and healthy choice for busy parents.
                              </motion.p>

                              {/* Button */}
                              <motion.div
                                    className="flex flex-wrap justify-center md:justify-start items-center gap-5"
                                    variants={textVariants}
                              >
                                    <Link href="/products">
                                          <Button className="bg-[#ffe4d8] text-[#5e741d]">View Our Products</Button>
                                    </Link>
                              </motion.div>

                              {/* Icon Section - No stagger here */}
                              <div className="flex items-center justify-center md:justify-start">
                                    <img className="w-[75%] mx-auto md:-mx-5 block" src={'/tag.png'} alt="" />
                              </div>
                        </motion.div>
                  </div>
            </div>
      );
};

export default Ingredient;
