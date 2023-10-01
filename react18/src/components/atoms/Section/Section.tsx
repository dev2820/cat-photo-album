import { HTMLAttributes } from 'react';

import style from './Section.module.css';

interface Props extends HTMLAttributes<HTMLElement> {
  label: string;
}

export const Section = ({ label, children, ...props }: Props) => {
  return (
    <section {...props} aria-labelledby={label}>
      <h3 id={label} className={style['title']}>
        {label}
      </h3>
      {children}
    </section>
  );
};
