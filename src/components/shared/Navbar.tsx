'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import MobileDrawer from './MobileDrawer';
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { useIsLoggedIn } from '@/utils/getLoggedInUser';

const Navbar = () => {
      const path = usePathname();
      const isAuthenticated = useIsLoggedIn();
      const router = useRouter();

      const [isDrawerOpen, setIsDrawerOpen] = useState(false);

      const leftLinks = [
            { path: '/about-us', title: 'About Us' },
            { path: '/products', title: 'Products' },
            { path: '/ingredient', title: 'Ingredients' },
      ];

      const rightLinks = [
            { path: '/sustainability', title: 'Sustainability' },
            { path: '/contact', title: 'Contact' },
            { path: '/faq', title: 'FAQ' },
      ];

      return (
            <div className={`relative z-[999]  ${path !== '/' ? 'bg-[#bcd49a]' : 'bg-red-500 md:bg-transparent'}`}>
                  <div className="container flex items-center justify-between py-5 md:py-4">
                        {/* Left Links */}
                        <div className="hidden md:flex items-center gap-8 uppercase">
                              {leftLinks.map((link, index) => (
                                    <Link
                                          key={index}
                                          href={link.path}
                                          className={`tracking-wider text-white whitespace-nowrap ${
                                                path === link.path ? 'border-b-2 border-primary' : ''
                                          }`}
                                    >
                                          {link.title}
                                    </Link>
                              ))}
                        </div>

                        {/* Logo (Centered) */}
                        <div className="flex justify-center  ">
                              <a href="/">
                                    <img
                                          alt="Logo"
                                          className=" w-[80px] md:w-[130px] h-12 md:h-16 brightness-0 invert"
                                          src="/logo.png"
                                    />
                              </a>
                        </div>

                        {/* Right Links */}
                        <div className="hidden md:flex items-center gap-8 uppercase">
                              {rightLinks.map((link, index) => (
                                    <Link
                                          key={index}
                                          href={link.path}
                                          className={`tracking-wider text-white whitespace-nowrap ${
                                                path === link.path ? 'border-b-2 border-primary' : ''
                                          }`}
                                    >
                                          {link.title}
                                    </Link>
                              ))}

                              {isAuthenticated ? (
                                    <button
                                          onClick={() => router.push('/products-details')}
                                          className={`tracking-wider text-white whitespace-nowrap `}
                                    >
                                          Dashboard
                                    </button>
                              ) : (
                                    <Link href={'/login'} className={`tracking-wider text-white whitespace-nowrap `}>
                                          Login
                                    </Link>
                              )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button onClick={() => setIsDrawerOpen(true)} className="block md:hidden text-white text-2xl">
                              <MenuOutlined />
                        </button>
                  </div>

                  {/* Mobile Drawer */}
                  <MobileDrawer
                        open={isDrawerOpen}
                        links={[...leftLinks, ...rightLinks]}
                        onClose={() => setIsDrawerOpen(false)}
                  />
            </div>
      );
};

export default Navbar;
