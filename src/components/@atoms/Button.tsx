import { Button as AntdButton, ButtonProps } from 'antd';
import { PropsWithChildren } from 'react';

interface IButtonProps extends ButtonProps, PropsWithChildren {}
function Normal({ children, ...antdProps }: IButtonProps) {
  return <AntdButton {...antdProps}>{children}</AntdButton>;
}
function Square({ children, ...props }: IButtonProps) {
  return <div {...props}>{children}</div>;
}

const Button = {
  Normal,
  Square,
};

export default Button;
