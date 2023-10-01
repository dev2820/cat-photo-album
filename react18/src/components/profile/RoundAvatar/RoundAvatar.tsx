import { ImgHTMLAttributes } from 'react';

import style from './RoundAvatar.module.css';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
}

export const RoundAvatar = ({ size = 100, className, ...props }: Props) => {
  return (
    <img
      className={`${style['round-avatar']} ${className}`}
      width={size}
      height={size}
      {...props}
    />
  );
};
