import { HTMLAttributes } from 'react';

import style from './index.module.css';

interface InputProps extends HTMLAttributes<HTMLInputElement> {}

export function TextField({ className, ...props }: InputProps) {
  return <input type="text" className={`${className} ${style.input}`} {...props}></input>;
}
