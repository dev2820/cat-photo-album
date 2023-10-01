import { MouseEventHandler } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Card, Chip } from 'src/components/atoms';
import { useRepositories, type Repository } from 'src/hooks/use-repositories';
import { formatYYYYMMDD } from 'src/utils/date';

import style from './RepositoryPage.module.css';
import { NotFound } from 'src/components/NotFound';

export function RepositoryPage() {
  const { id } = useParams();
  const { repositories, error, isLoading, isEnd, loadNextPage } = useRepositories(id);

  if (isLoading) return <>loading...</>;
  if (error) return ErrorView(error);

  return (
    <>
      <ul className={style['list']}>
        {repositories.map((repository, index) => (
          <li key={index} className={style['list-item']}>
            <Repository repository={repository} />
          </li>
        ))}
      </ul>
      <LoadMoreButton onClick={loadNextPage} className={style['load-more-button']} isEnd={isEnd} />
    </>
  );
}

const ErrorView = (error: Response) => {
  if (error && error.status === 404) {
    return <NotFound message="Oops! User Not Exist" className={style['not-found']}></NotFound>;
  }
  if (error && error.status >= 500) {
    return <div>Server Error</div>;
  }
};

const Repository = ({ repository }: { repository: Repository }) => {
  return (
    <Card className={style['repository']}>
      <div className={style['repository__info']}>
        <h3 className={style['repository__name']}>{repository.name}</h3>
        <small className={style['created-at']}>
          created at {formatYYYYMMDD(repository.createdAt, { separator: '-' })}
        </small>
        <p className={style['repository__description']}>{repository.description}</p>
        <div>{repository.language && <Chip outline={true} text={repository.language} />}</div>
      </div>
      <Button className={style['visit-button']}>
        <a href={repository.url} target="_blank">
          visit
        </a>
      </Button>
    </Card>
  );
};

const LoadMoreButton = ({
  onClick,
  isEnd,
  className
}: {
  onClick: MouseEventHandler;
  isEnd: boolean;
  className: string;
}) => {
  if (isEnd) return <></>;

  return (
    <Button onClick={onClick} className={className}>
      load more
    </Button>
  );
};
