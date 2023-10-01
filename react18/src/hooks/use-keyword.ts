import { FormEventHandler, useState } from 'react';

export function useKeyword(defaultKeyword: string = '') {
  const [keyword, setKeyword] = useState(defaultKeyword);

  const handleInputKeyword: FormEventHandler = (e) => {
    const $target = e.target as HTMLInputElement;
    setKeyword($target.value);
  };

  return {
    keyword,
    handleInputKeyword
  };
}
