import { MouseEventHandler } from 'react';

import { Chip } from 'src/components/atoms';
import { useSearch } from 'src/hooks/use-search';
import { useLastInquiry } from 'src/stores/last-inquiry';

import style from './LastInquiry.module.css';

export function LastInquiry() {
  const { search } = useSearch();
  const [state] = useLastInquiry();
  const { inquiries } = state;

  if (inquiries === null) {
    return <div></div>;
  }

  const handleClickChip: MouseEventHandler = (e) => {
    const $target = e.target as HTMLElement;
    const $li = $target.closest('li');

    if (!$li) {
      return;
    }

    const keyword = $li.dataset['keyword'];
    if (keyword) {
      search(keyword);
    }
  };
  return (
    <ul onClick={handleClickChip} className={style['list']}>
      {inquiries.map((inquiry, index) => (
        <li data-keyword={inquiry} key={index}>
          <a className={style['link']}>
            <Chip text={inquiry}></Chip>
          </a>
        </li>
      ))}
    </ul>
  );
}
