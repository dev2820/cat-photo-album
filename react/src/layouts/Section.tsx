import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
}

export function Section({ title, children, ...props }:Props) {

  return (
    <section aria-labelledby={title} role="region" {...props}>
      <h3 id={title}>
        {title}
      </h3>
      { children }
    </section>
  )
}