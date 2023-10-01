import { MouseEventHandler } from 'react';

import { BaseLayout } from 'src/layouts/BaseLayout';
import { Form, Button } from 'src/components/atoms';
import { useKeyword } from 'src/hooks/use-keyword';
import { useSearch } from 'src/hooks/use-search';
import { handleEnter } from 'src/utils/event';

import style from './HomePage.module.css';

export function HomePage() {
  const { keyword, handleInputKeyword } = useKeyword();
  const { search } = useSearch();

  const handleEnterTextField = handleEnter(() => {
    search(keyword);
  });

  const handleClickSearch: MouseEventHandler = () => {
    search(keyword);
  };

  return (
    <BaseLayout className={style['_']}>
      <header className={style['header']}>
        <h1 className={style.title}>github 아이디를 입력해 유저를 검색하세요</h1>
      </header>
      <main className={style['main']}>
        <Form.FieldSet className={style['fieldset']}>
          <Form.TextField
            placeholder="github id를 입력하세요"
            className={style['text-field']}
            value={keyword}
            onChange={handleInputKeyword}
            onKeyUp={handleEnterTextField}
          ></Form.TextField>
          <Button className={style['button__search']} onClick={handleClickSearch}>
            검색
          </Button>
        </Form.FieldSet>
      </main>
      <footer></footer>
    </BaseLayout>
  );
}
