import { useParams } from 'react-router-dom';

import { IconText, Section } from 'src/components/atoms';
import { RoundAvatar } from 'src/components/profile/RoundAvatar';
import { useProfile, type Profile } from 'src/hooks/use-profile';
import { ItemCount } from 'src/components/profile/ItemCount';
import { capitalize } from 'src/utils/string';
import { formatYYYYMMDD } from 'src/utils/date';

import style from './ProfilePage.module.css';

export function ProfilePage() {
  const { id } = useParams();
  const { profile } = useProfile(id ?? '');

  return <div className={style['_']}>{profile && <Profile profile={profile} />}</div>;
}

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
      <Section label="meta" className={`card ${style['meta']}`}>
        <IconText name="calendar">
          {formatYYYYMMDD(new Date(createdAt), { separator: '-' })}
        </IconText>
        <IconText name="map-pin">{capitalize(location)}</IconText>
        <a href={githubUrl} target="_blank">
          <IconText name="github-mark-white">Link to Github</IconText>
        </a>
      </Section>
    </>
  );
};
