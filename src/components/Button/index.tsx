import React, { FC } from 'react';
import classNames from 'classnames';

type ButtonProps = {
  href: string;
  className?: string;
  flavor?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  icon?: 'right-arrow';
}

const Button: FC<ButtonProps> = ({ href, children, className, flavor, size, icon }) => {
  const buttonClassNames = classNames(
    'button',
    {'button--primary' : flavor === 'primary'},
    {'button--secondary' : flavor === 'secondary'},
    {'button--outline' : flavor === 'outline'},
    {'button--small' : size === 'small'},
    {'button--medium' : size === 'medium'},
    {'button--large' : size === 'large'},
    {'button--right-arrow': icon === 'right-arrow'},
    className
  );
  return (
    <a className={buttonClassNames} href={href} ><span className="button__content large-label">{children}</span></a> 
  )
};

export default Button;
