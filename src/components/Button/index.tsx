import React, { FC } from 'react';

type ButtonProps = {
  href: string;
}

const Button: FC<ButtonProps> = ({ href, children }) => (
  <a className="button button__main" href={href} ><span className="button__content large-label">{children}</span></a>
);

export default Button;
