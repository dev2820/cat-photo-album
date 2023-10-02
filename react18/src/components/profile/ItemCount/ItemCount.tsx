import { HTMLAttributes } from 'react';

import { toLocale } from 'src/utils/number';

import style from './ItemCount.module.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  count: number;
  label?: string;
}

export const ItemCount = ({ count, label = '', className, ...props }: Props) => {
  return (
    <div className={`${style['item-count']} ${className}`} {...props}>
      <b className={style.count}>{toLocale(count)}</b>
      {label && <span className={style.label}>{label}</span>}
    </div>
  );
};
