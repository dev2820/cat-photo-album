import React from 'react';

import style from './BaseLayout.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function BaseLayout({ children, className }: Props) {
  const [$header, $main, $footer] = React.Children.toArray(children);
  return (
    <div role="presentation" className={`${className} ${style['base-layout']}`}>
      {$header}
      {$main}
      {$footer}
    </div>
  );
}
