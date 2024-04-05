import { PropsWithChildren } from 'react';
import Footer from '../@organisms/Footer';
import Header from '../@organisms/Header';

interface IMainCommonProps extends PropsWithChildren {}
function MainHeader({ children }: IMainCommonProps) {
  return <Header>{children}</Header>;
}

function MainContent({ children }: IMainCommonProps) {
  return <main>{children}</main>;
}

function MainFooter({ children }: IMainCommonProps) {
  return <Footer>{children}</Footer>;
}

const Main = {
  Header: MainHeader,
  Content: MainContent,
  Footer: MainFooter,
};

export default Main;
