import { HTMLAttributes } from 'react';

import style from './Button.module.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, ...props }: Props) {
  return (
    <button type="button" className={`${style.button} ${className}`} {...props}>
      {children}
    </button>
  );
}
