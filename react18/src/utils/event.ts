import { KeyboardEventHandler, KeyboardEvent } from 'react';

export function keyboardEnterHandler(cb: KeyboardEventHandler) {
  return (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    cb(e);
  };
}
