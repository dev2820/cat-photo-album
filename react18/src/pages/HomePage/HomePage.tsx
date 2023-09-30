import { FormEventHandler, MouseEventHandler, useState } from 'react';

import { HomeLayout } from 'src/layouts/HomeLayout';
import { Form, Button } from 'src/components/atoms';
import { keyboardEnterHandler } from 'src/utils/event';
import { useNavigate } from 'react-router-dom';

import style from './HomePage.module.css';

export function HomePage() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const search = (keyword: string) => {
    navigate(`/${keyword}`);
  };

  const handleSearchInput: FormEventHandler = (e) => {
    const $target = e.target as HTMLInputElement;
    setKeyword($target.value);
  };

  const handleEnterSearch = keyboardEnterHandler(() => {
    search(keyword);
  });

  const handleClickSearch: MouseEventHandler = () => {
    search(keyword);
  };

  return (
    <HomeLayout>
      <header className={style['header']}>
        <h1 className={style.title}>github 아이디를 입력해 유저를 검색하세요</h1>
      </header>
      <main className={style['main']}>
        <Form.FieldSet className={style['fieldset']}>
          <Form.TextField
            placeholder="github id를 입력하세요"
            className={style['text-field']}
            value={keyword}
            onChange={handleSearchInput}
            onKeyUp={handleEnterSearch}
          ></Form.TextField>
          <Button className={style['button__search']} onClick={handleClickSearch}>
            검색
          </Button>
        </Form.FieldSet>
      </main>
      <footer></footer>
    </HomeLayout>
  );
}
