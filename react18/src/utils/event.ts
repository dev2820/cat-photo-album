import { KeyboardEventHandler, KeyboardEvent } from 'react';

export function handleEnter(cb: KeyboardEventHandler) {
  return (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    cb(e);
  };
}
