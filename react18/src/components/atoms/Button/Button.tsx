import { ButtonHTMLAttributes } from 'react';

import style from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, ...props }: Props) {
  return (
    <button type="button" className={`${style.button} ${className}`} {...props}>
      {children}
    </button>
  );
}
