import { useParams } from 'react-router-dom';

import { IconText, Section, Card } from 'src/components/atoms';
import { RoundAvatar } from 'src/components/profile/RoundAvatar';
import { NotFound } from 'src/components/NotFound';
import { useProfile, type Profile } from 'src/hooks/use-profile';
import { ItemCount } from 'src/components/profile/ItemCount';
import { capitalize } from 'src/utils/string';
import { formatYYYYMMDD } from 'src/utils/date';

import style from './ProfilePage.module.css';

export function ProfilePage() {
  const { id } = useParams();
  const { isLoading, error, profile } = useProfile(id ?? '');

  if (isLoading) return <div>loading...</div>;
  if (error) return ErrorView(error);

  return <div className={style['_']}>{profile && <Profile profile={profile} />}</div>;
}

const ErrorView = (error: Response) => {
  if (error && error.status === 404) {
    return <NotFound message="Oops! User Not Exist" className={style['_']}></NotFound>;
  }
  if (error && error.status >= 500) {
    return <div>Server Error</div>;
  }
};

const Profile = ({ profile }: { profile: Profile }) => {
  const {
    name,
    avatarUrl,
    bio,
    totalFollowers,
    totalFollowing,
    totalPublicRepos,
    createdAt,
    location,
    githubUrl
  } = profile;
  const alt = `${profile.name}'s avatar`;
  return (
    <>
      <RoundAvatar className={style['avatar']} src={avatarUrl} size={140} alt={alt}></RoundAvatar>
      <h2 className={style['name']}>{name}</h2>
      <Section className={style['bio']} label="bio">
        <p>{bio}</p>
      </Section>
      <Section label="summary" className={style['summary']}>
        <ItemCount
          className={style['item-count']}
          count={totalPublicRepos}
          label="Repos"
        ></ItemCount>
        <ItemCount
          className={style['item-count']}
          count={totalFollowers}
          label="Followers"
        ></ItemCount>
        <ItemCount
          className={style['item-count']}
          count={totalFollowing}
          label="Following"
        ></ItemCount>
      </Section>
      <Section label="meta" className={style['section']}>
        <Card className={style['meta']}>
          <IconText name="calendar">{formatYYYYMMDD(createdAt, { separator: '-' })}</IconText>
          {location && <IconText name="map-pin">{capitalize(location)}</IconText>}
          <a href={githubUrl} target="_blank">
            <IconText name="github-mark-white">Link to Github</IconText>
          </a>
        </Card>
      </Section>
    </>
  );
};
