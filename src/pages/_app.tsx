import useTheme from '@/hooks/useMediaQuery';
import '@/styles/globals.css';
import theme from '@/themeConfig';
import { ThemeProvider } from '@emotion/react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const colorTheme = useTheme();

  return (
    <ConfigProvider theme={theme}>
      <ThemeProvider theme={colorTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ConfigProvider>
  );
}
