import { Outlet, Link, useParams, useLocation } from 'react-router-dom';

import { BaseLayout } from 'src/layouts/BaseLayout';
import { Form } from 'src/components/atoms';
import { useKeyword } from 'src/hooks/use-keyword';
import { useSearch } from 'src/hooks/use-search';
import { handleEnter } from 'src/utils/event';

import style from './UserPage.module.css';

export function UserPage() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { keyword, handleInputKeyword } = useKeyword();
  const { search } = useSearch();

  const links = [
    { text: 'Profile', to: '' },
    { text: 'Repos', to: 'repos' },
    { text: 'Followers', to: 'followers' }
  ];

  const isActivedUrl = (path: string) => {
    if (path === '') return `/${id}` === pathname;
    return `/${id}/${path}` === pathname;
  };

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
        <nav className={style['nav']}>
          {links.map(({ text, to }) => (
            <Link
              to={to}
              key={to}
              className={`${style['nav-item']} ${isActivedUrl(to) && style['nav__active']}`}
            >
              {text}
            </Link>
          ))}
        </nav>
      </header>
      <main className={style['main']}>
        <Outlet></Outlet>
      </main>
    </BaseLayout>
  );
}
