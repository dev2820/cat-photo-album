import { LabelHTMLAttributes } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ children, className, ...props }: LabelProps) {
  return (
    <label className={`${className}`} {...props}>
      {children}
    </label>
  );
}
