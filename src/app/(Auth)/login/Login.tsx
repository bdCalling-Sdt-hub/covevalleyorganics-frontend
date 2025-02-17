'use client';

import { useLoginAdminMutation } from '@/redux/features/auth/authApi';
import { setAccessToken } from '@/utils/setAccessToken';
import { Button, Form, Input, message } from 'antd';

import { useRouter } from 'next/navigation';
import React from 'react';

const Login = () => {
      const router = useRouter();
      const [loginAdmin] = useLoginAdminMutation();

      const onFinish = async (values: FormData) => {
            try {
                  const res = await loginAdmin(values).unwrap();
                  if (res.success) {
                        // setAccessToken(res.data);
                        localStorage.setItem('accessToken', res.data);
                        message.success(res.message);
                        router.push('/');
                        // window.location.reload();
                  }
                  if (!res.success) {
                        message.success(res.message);
                  }
            } catch (error: any) {
                  console.log(error);
                  message.error(error.message);
            }
      };

      return (
            <div
                  className={` bg-[#bcd49a] w-full min-h-screen transition-all duration-1000 ease-in-out  pt-[85px] flex flex-col md:flex-row   items-center justify-center `}
            >
                  <div className="md:w-1/2">
                        <p className="text-center pb-4 text-3xl text-[#222222] font-[450]">Log in to your account </p>
                        <p className="text-center text-[18px] pb-14 text-[#6B6B6B]">
                              Please enter your email and password to continue
                        </p>

                        <Form onFinish={onFinish} layout="vertical" className=" w-full">
                              <Form.Item
                                    style={{ marginBottom: 0 }}
                                    name="email"
                                    rules={[
                                          {
                                                required: true,
                                                message: 'Please input your email!',
                                          },
                                    ]}
                                    label={<p className="text-[#6D6D6D]">Email</p>}
                              >
                                    <Input
                                          type="email"
                                          placeholder="Enter your email"
                                          style={{
                                                border: '1px solid #E0E4EC',
                                                height: '48px',
                                                background: 'white',
                                                borderRadius: '8px',
                                                outline: 'none',
                                          }}
                                    />
                              </Form.Item>
                              <br />
                              <Form.Item
                                    style={{ marginBottom: 0 }}
                                    name="password"
                                    rules={[
                                          {
                                                required: true,
                                                message: 'Please input your Password!',
                                          },
                                    ]}
                                    label={<p className="text-[#6D6D6D]">Password</p>}
                              >
                                    <Input.Password
                                          type="password"
                                          placeholder="Enter your password"
                                          style={{
                                                border: '1px solid #E0E4EC',
                                                height: '48px',
                                                background: 'white',
                                                borderRadius: '8px',
                                                outline: 'none',
                                          }}
                                    />
                              </Form.Item>

                              <br />
                              <Button
                                    className="cursor-pointer"
                                    htmlType="submit"
                                    block
                                    style={{
                                          border: 'none',
                                          height: '48px',
                                          background: '#89a809',
                                          color: 'white',
                                          borderRadius: '8px',
                                          outline: 'none',
                                          padding: '10px 20px',
                                    }}
                              >
                                    {' '}
                                    Sign In
                              </Button>
                        </Form>
                  </div>
            </div>
      );
};

export default Login;
