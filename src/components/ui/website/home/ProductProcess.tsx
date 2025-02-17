'use client';

import { motion } from 'framer-motion';
import Heading from '@/components/shared/Heading';

const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
            opacity: 1,
            transition: {
                  staggerChildren: 0.1,
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

const ProductProcess = () => {
      return (
            <div className="bg-[#21483B] py-20">
                  <div className="container text-center mb-10">
                        <img className="size-24 mx-auto" alt="image" src="/green_leaf.png" />
                        <h1 className="text-[#64bc9b] text-3xl oswald md:text-5xl font-medium tracking-wider">
                              Our Process: From Farm to Freezer
                        </h1>
                  </div>
                  <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                              {/* Updated image section with bottom-center alignment */}
                              <div className="order-last flex items-center justify-center h-full">
                                    <img
                                          loading="lazy"
                                          alt="image"
                                          className="md:w-[420px] w-[90%]"
                                          src="/process.png"
                                    />
                              </div>

                              {/* Text section with stagger animations */}
                              <motion.div
                                    className="space-y-5 text-center md:text-start text-white"
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={containerVariants}
                                    viewport={{ once: false, amount: 0.5 }}
                              >
                                    <div>
                                          <motion.h3 className="text-lg font-medium" variants={textVariants}>
                                                1. Sourcing High-Quality, Organic Ingredients
                                          </motion.h3>
                                          <motion.p
                                                className="text-lg font-medium text-[#d5dad7]"
                                                variants={textVariants}
                                          >
                                                We carefully select 100% organic fruits and vegetables from trusted
                                                sources to ensure every product is made from the highest-quality
                                                ingredients, packed with essential nutrients.
                                          </motion.p>
                                    </div>
                                    <div>
                                          <motion.h3 className="text-lg font-medium" variants={textVariants}>
                                                2. Careful Preparation at Our Facility
                                          </motion.h3>
                                          <motion.p
                                                className="text-lg font-medium text-[#d5dad7]"
                                                variants={textVariants}
                                          >
                                                Once sourced, our ingredients are prepared at our production facility,
                                                ensuring they are handled with care to maintain their freshness and
                                                nutritional value.
                                          </motion.p>
                                    </div>
                                    <div>
                                          <motion.h3 className="text-lg font-medium" variants={textVariants}>
                                                3. Small-Batch Pureeing
                                          </motion.h3>
                                          <motion.p
                                                className="text-lg font-medium text-[#d5dad7]"
                                                variants={textVariants}
                                          >
                                                At our facility, we gently steam and blend the produce into smooth and
                                                flavourful purees, ensuring they’re packed with all the essential
                                                vitamins and minerals for growing babies.
                                          </motion.p>
                                    </div>
                                    <div>
                                          <motion.h3 className="text-lg font-medium" variants={textVariants}>
                                                4. Flash-Freezing to Lock in Freshness
                                          </motion.h3>
                                          <motion.p
                                                className="text-lg font-medium text-[#d5dad7]"
                                                variants={textVariants}
                                          >
                                                After pureeing, our products are flash-frozen at the peak of their
                                                freshness. This rapid freezing process preserves the nutrients, flavour,
                                                and texture, delivering parents a convenient and wholesome solution for
                                                feeding their babies.
                                          </motion.p>
                                    </div>
                              </motion.div>
                        </div>
                  </div>
            </div>
      );
};

export default ProductProcess;
