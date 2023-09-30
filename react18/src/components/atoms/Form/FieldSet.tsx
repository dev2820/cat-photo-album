import { HTMLAttributes } from 'react';

import style from './index.module.css';

interface Props extends HTMLAttributes<HTMLFieldSetElement> {}

export function FieldSet({ children, className, ...props }: Props) {
  return (
    <fieldset className={`${className} ${style['field-set']}`} {...props}>
      {children}
    </fieldset>
  );
}
