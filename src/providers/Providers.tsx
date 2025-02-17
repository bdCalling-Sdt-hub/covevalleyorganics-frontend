'use client';
import { store } from '@/redux/store';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

const Providers = ({ children }: { children: ReactNode }) => {
      return (
            <Provider store={store}>
                  <AntdRegistry>{children}</AntdRegistry>
            </Provider>
      );
};

export default Providers;
