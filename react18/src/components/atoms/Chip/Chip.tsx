import { HTMLAttributes } from 'react';

import style from './Chip.module.css';

type Theme = 'primary' | 'normal';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  outline?: boolean;
  theme?: Theme;
}

export const Chip = ({ text, outline = false, theme = 'normal', ...props }: Props) => {
  const themeStyle = style[theme];
  const borderStyle = outline ? style['border'] : '';

  return (
    <span {...props} className={`${themeStyle}  ${borderStyle} ${style['chip']}`}>
      {text}
    </span>
  );
};
