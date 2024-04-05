import { PropsWithChildren } from 'react';

interface IHeaderProps extends PropsWithChildren {}
function Header({ children }: IHeaderProps) {
  return <header>{children}</header>;
}

export default Header;
