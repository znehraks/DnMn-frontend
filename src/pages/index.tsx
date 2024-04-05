// import { Inter } from 'next/font/google';
import Main from '@/components/@templates/MainPage';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Main.Header>메인헤더</Main.Header>
      <Main.Content>메인컨텐츠</Main.Content>
      <Main.Footer>메인푸터</Main.Footer>
    </>
  );
}
