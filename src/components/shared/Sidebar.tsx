'use client';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MenuProps } from 'antd';
import { Contact, FileQuestion, LayoutGrid, LayoutList, LogOut } from 'lucide-react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { removeAccessToken } from '@/utils/setAccessToken';

const Sidebar = () => {
      const pathname = usePathname();

      interface ItemType {
            title: string;
            path: string;
            icon: React.JSX.Element;
      }

      const linkItems: ItemType[] = [
            {
                  title: 'Products',
                  path: '/products-details',
                  icon: <LayoutGrid />,
            },

            {
                  title: 'Contact',
                  path: '/contact-details',
                  icon: <Contact />,
            },

            {
                  title: 'FAQ',
                  path: '/faq-details',
                  icon: <FileQuestion />,
            },
            {
                  title: 'Blogs',
                  path: '/blogs-details',
                  icon: <LayoutList />,
            },
      ];

      const menuItems: MenuProps['items'] = linkItems.map((item, index) => {
            return {
                  key: index,
                  label: (
                        <Link
                              href={item.path}
                              className={`flex w-full ${
                                    item.path === pathname ? 'bg-[#68a2f3] text-white' : 'bg-transparent text-black'
                              } items-center gap-[14px] px-3 py-2 rounded-[5px] font-normal`}
                        >
                              <div>{item.icon}</div>
                              <div>{item.title}</div>
                        </Link>
                  ),
            };
      });

      const handleLogout = () => {
            Swal.fire({
                  title: 'Are you sure?',

                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, Logout!',
            }).then((result) => {
                  if (result.isConfirmed) {
                        localStorage.removeItem('accessToken');
                        removeAccessToken();
                        Swal.fire({
                              text: 'Your logout is successful.',
                              icon: 'success',
                        });
                  }
            });
      };
      return (
            <div>
                  <div
                        className="lg:h-[110vh] w-[300px] lg:fixed bg-[#bcd49a]"
                        style={{
                              overflow: 'auto',
                              overflowY: 'hidden',
                              zIndex: 50,
                              paddingRight: '20px',
                        }}
                  >
                        <div className="logo flex items-center justify-between lg:justify-center gap-2 lg:mt-[30px] lg:mb-[20px] mt-[10px] mx-3  border-b-2 py-3 lg:border-none">
                              <div>
                                    <Link href="/">
                                          <Image
                                                src="/logo.png"
                                                alt=""
                                                className="brightness-0 invert w-[120px]"
                                                height={100}
                                                width={500}
                                          />
                                    </Link>
                              </div>

                              <div className="lg:hidden block">
                                    <Dropdown menu={{ items: menuItems }}>
                                          <a onClick={(e) => e.preventDefault()}>
                                                <Space>h</Space>
                                          </a>
                                    </Dropdown>
                              </div>
                        </div>

                        <div className="hidden lg:block">
                              <ul
                                    style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          gap: '10px',
                                          height: '100%',
                                          marginTop: 0,
                                    }}
                              >
                                    {linkItems.map((item, index) => {
                                          return (
                                                <li
                                                      key={index}
                                                      style={{
                                                            width: '100%',
                                                            height: '34px',
                                                            position: 'relative',
                                                            marginBottom: '10px',
                                                            paddingLeft: '30px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                      }}
                                                >
                                                      <Link
                                                            href={item.path}
                                                            style={{
                                                                  display: 'flex',
                                                                  width: '100%',
                                                                  backgroundColor:
                                                                        item.path === pathname
                                                                              ? '#89a809'
                                                                              : 'transparent',
                                                                  color: item.path === pathname ? '#fff' : '#fff',
                                                                  alignItems: 'center',
                                                                  gap: '14px',
                                                                  padding: '10px 10px',
                                                                  fontWeight: '400',
                                                            }}
                                                            className="rounded-full rounded-tl-none tracking-wide"
                                                      >
                                                            <div style={{ height: '24px' }}>{item.icon}</div>
                                                            <div
                                                                  style={{
                                                                        fontSize: '16px',
                                                                        height: 'fit-content',
                                                                  }}
                                                            >
                                                                  {item.title}
                                                            </div>
                                                      </Link>
                                                </li>
                                          );
                                    })}
                                    <li>
                                          <button
                                                onClick={handleLogout}
                                                style={{
                                                      width: '100%',
                                                      height: '34px',
                                                      position: 'relative',
                                                      marginBottom: '10px',
                                                      paddingLeft: '30px',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                }}
                                                className="flex text-lg text-white items-center gap-4 mx-3"
                                          >
                                                <LogOut size={24} /> Log out
                                          </button>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      );
};

export default Sidebar;
