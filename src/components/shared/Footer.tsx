'use client';
import { useGetSupportQuery } from '@/redux/features/support/supportApi';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
      const { data: supports } = useGetSupportQuery([]);

      return (
            <>
                  <div className="">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F16763"
            fillOpacity="1"
            d="M0,128L120,144C240,160,480,192,720,192C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg> */}
                  </div>
                  <div className="bg-[#F16763] text-center md:text-start">
                        <div className="grid grid-cols-1 md:grid-cols-3 justify-center  items-center container gap-14 py-20">
                              <div>
                                    <img
                                          alt="image"
                                          className="w-[50%] mx-auto md:mx-0 brightness-0 invert"
                                          src="/logo.png"
                                    />

                                    <p className="text-white mt-5">
                                          *Receive fresh tips and exclusive promotions. No spam – we promise.
                                    </p>

                                    {/*  */}
                              </div>
                              <div className="text-white mx-auto">
                                    <h2 className="uppercase">Quick Links</h2>
                                    <div className="flex flex-col mt-8 gap-4">
                                          <Link href="/about-us">About us</Link>
                                          <Link href="/faq">FAQ</Link>
                                          <Link href="/blogs">Blogs</Link>
                                    </div>
                              </div>
                              <div className="text-white mx-auto">
                                    <h2 className="uppercase">CONTACT DETAILS</h2>
                                    <div className="flex flex-col mt-8 gap-4">
                                          <p className="flex items-center gap-2">
                                                <MapPin color="#fff" />
                                                {supports?.location}
                                          </p>
                                          <p className="flex items-center gap-2">
                                                <Phone color="#fff" />
                                                {supports?.contact}
                                          </p>
                                          <p className="flex items-center gap-2">
                                                <Mail color="#fff" />
                                                {supports?.email}
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}
