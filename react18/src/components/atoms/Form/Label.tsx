import { HTMLAttributes } from 'react';

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {}

export function Label({ children, className, ...props }: LabelProps) {
  return (
    <label className={`${className}`} {...props}>
      {children}
    </label>
  );
}
