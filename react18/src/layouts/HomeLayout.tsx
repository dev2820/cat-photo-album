import React from 'react';

import style from './HomeLayout.module.css';

interface Props {
  children: React.ReactNode;
}

export function HomeLayout({ children }: Props) {
  const [$header, $main, $footer] = React.Children.toArray(children);
  return (
    <div role="presentation" className={style['home-layout']}>
      {$header}
      {$main}
      {$footer}
    </div>
  );
}
