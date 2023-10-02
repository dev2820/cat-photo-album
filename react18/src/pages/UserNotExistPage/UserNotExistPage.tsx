import { useLocation } from 'react-router-dom';

import { BaseLayout } from 'src/layouts/BaseLayout';
import { LastInquiry } from 'src/components/LastInquiry';
import { Form } from 'src/components/atoms';
import { useKeyword } from 'src/hooks/use-keyword';
import { useSearch } from 'src/hooks/use-search';
import { handleEnter } from 'src/utils/event';

import style from './UserNotExistPage.module.css';

export function UserNotExistPage() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');

  const { keyword, handleInputKeyword } = useKeyword(id ?? '');
  const { search } = useSearch();

  const handleEnterTextField = handleEnter(() => {
    search(keyword);
  });

  return (
    <BaseLayout>
      <header className={style['header']}>
        <Form.FieldSet className={style['fieldset']}>
          <Form.TextField
            className={style['text-field']}
            placeholder="github id를 입력하세요"
            value={keyword}
            onInput={handleInputKeyword}
            onKeyDown={handleEnterTextField}
          ></Form.TextField>
        </Form.FieldSet>
      </header>
      <main className={style['main']}>
        <h1>'{id}' User Not Exist</h1>
        <p>please check inputed id again</p>
        <img src="/userNotExist.png" width="100%" />
      </main>
      <footer>
        <LastInquiry></LastInquiry>
      </footer>
    </BaseLayout>
  );
}
