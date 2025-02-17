'use client';
import { Mail, MapPin, Phone } from 'lucide-react';
import FAQ from '../home/FAQ';
import { useGetSupportQuery } from '@/redux/features/support/supportApi';

const Contact = () => {
      const { data: supports = [] } = useGetSupportQuery([]);
      const contactInfo = [
            {
                  icon: <MapPin fill="#829f01" size={40} color="#fff" />,
                  title: 'Location',
                  value: supports?.location,
            },
            {
                  icon: <Mail fill="#829f01" size={40} color="#fff" />,
                  title: 'Email',
                  value: supports?.email,
            },
            {
                  icon: <Phone fill="#829f01" size={40} color="#fff" />,
                  title: 'Get in Touch',
                  value: supports?.contact,
            },
      ];

      return (
            <div className="container relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 pt-16 px-5">
                        {contactInfo.map((item, index) => (
                              <div key={index} className="border p-5 rounded relative">
                                    <div className="absolute md:-left-10  bg-white shadow w-16 h-16 flex justify-center items-center rounded-full">
                                          {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span> */}
                                          {item.icon}
                                    </div>
                                    <div className="ml-20">
                                          <h2 className="text-2xl mb-4">{item.title}</h2>
                                          <p>{item.value}</p>
                                    </div>
                              </div>
                        ))}
                  </div>
                  <FAQ />
            </div>
      );
};

export default Contact;
