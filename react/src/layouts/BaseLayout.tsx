import React from "react";
import type { FC } from "react";

interface Props {
  children: React.ReactNode;
}

import './BaseLayout.css';

export const BaseLayout: FC<Props> = ({ children }) => {
  const [Header, ...Main] = React.Children.toArray(children)
  
  return (<>
    <header>
      { Header }
    </header>
    <main>
      { Main }
    </main>
  </>)
}