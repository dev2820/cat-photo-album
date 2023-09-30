import { HomeLayout } from 'src/layouts/HomeLayout';
import { Form, Button } from 'src/components/atoms';

import style from './HomePage.module.css';

export function HomePage() {
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
          ></Form.TextField>
          <Button className={style['button__search']}>검색</Button>
        </Form.FieldSet>
      </main>
      <footer></footer>
    </HomeLayout>
  );
}
