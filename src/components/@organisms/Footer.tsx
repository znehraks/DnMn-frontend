import { PropsWithChildren } from 'react';

interface IFooterProps extends PropsWithChildren {}

function Footer({ children }: IFooterProps) {
  return <footer>{children}</footer>;
}

export default Footer;
