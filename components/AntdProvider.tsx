'use client';

import { ConfigProvider } from 'antd';
// import faIR from 'antd/locale/fa_IR';
import React from 'react';

export default function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#2563eb',
      },
    }}>
      {children}
    </ConfigProvider>
  );
}
