import React, { HTMLAttributes } from 'react';

import style from './MyIcon.module.css';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  svgPath: string;
  name: string;
  size?: number;
}

export function MyIcon({ svgPath, className = '', name, size = 24, ...props }: Props) {
  const iconPath = `${svgPath}#${name}`;

  return (
    <span className={`${style.icon} ${className}`} {...props}>
      <svg width={size} height={size}>
        <use xlinkHref={iconPath}></use>
      </svg>
    </span>
  );
}

export function createMyIcon(svgPath: string) {
  return (props: Omit<Props, 'svgPath'>) => MyIcon({ svgPath, ...props });
}
