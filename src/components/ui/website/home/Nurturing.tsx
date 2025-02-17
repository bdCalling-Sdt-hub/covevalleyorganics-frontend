'use client';

import { motion } from 'framer-motion';
import Button from '@/components/shared/Button';
import Heading from '@/components/shared/Heading';
import Link from 'next/link';

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

const Nurturing = () => {
      return (
            <div className="bg-[#d2f0ff] pt-20 md:pb-10 xl:pb-0 text-[#4c839a]">
                  <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                              <div className="order-last h-full">
                                    <img loading="lazy" alt="image" className="w-full" src="/baby-banana.png" />
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
                                          <Heading className="text-[#4c839a]">
                                                Nourish,
                                                <br /> Enjoy, Repeat
                                          </Heading>
                                    </motion.div>

                                    <motion.p className="text-lg" variants={textVariants}>
                                          We envision a world where parents can focus on enjoying mealtime with their
                                          babies, knowing they are providing high-quality, fresh food that supports
                                          healthy development.
                                    </motion.p>

                                    <motion.div variants={textVariants}>
                                          <Link className="mt-12" href="/products">
                                                <Button className="bg-[#84b2ce] text-[#ccf0fd]">
                                                      View Our Products
                                                </Button>
                                          </Link>
                                    </motion.div>
                              </motion.div>
                        </div>
                  </div>
            </div>
      );
};

export default Nurturing;
