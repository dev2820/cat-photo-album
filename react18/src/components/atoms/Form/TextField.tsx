import { HTMLAttributes } from 'react';

import style from './index.module.css';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
}

export function TextField({ className, value, ...props }: InputProps) {
  return (
    <input type="text" value={value} className={`${className} ${style.input}`} {...props}></input>
  );
}
