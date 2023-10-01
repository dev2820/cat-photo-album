import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function BaseLayout({ children }: Props) {
  const [$header, $main, $footer] = React.Children.toArray(children);
  return (
    <>
      {$header}
      {$main}
      {$footer}
    </>
  );
}
