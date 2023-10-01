import { HTMLAttributes } from 'react';

import style from './Card.module.css';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Card = ({ children, className = '', ...props }: Props) => {
  return (
    <div className={`${style['card']} ${className}`} {...props}>
      {children}
    </div>
  );
};
