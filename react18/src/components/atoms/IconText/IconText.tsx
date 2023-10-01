import { HTMLAttributes } from 'react';

import { Icon } from '../Icon';

import style from './IconText.module.css';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  size?: number;
  name?: string;
}

export const IconText = ({ children, name, size = 24, ...props }: Props) => {
  return (
    <span {...props}>
      {name && <Icon className={style['icon']} name={name} size={size}></Icon>}
      {children}
    </span>
  );
};
