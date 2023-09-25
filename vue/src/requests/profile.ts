import { toCamel } from "src/utils/object";

export type Profile = {
  name: string;
  avatarUrl: string;
  bio: string;
  followers:number;
  following:number;
  publicRepos: number;
  githubUrl: string;
  location: string;
};

export const defaultProfile = {
  name: '',
  avatarUrl: '',
  bio: '',
  followers: 0,
  following: 0,
  publicRepos: 0,
  githubUrl: '',
  location: ''
}

export const getProfile = async (userId: string): Promise<Profile> => {
  const res = await fetch(`https://api.github.com/users/${userId}`);
  const data = toCamel(await res.json());

  return {
    avatarUrl: data.avatarUrl,
    name: data.name,
    bio: data.bio,
    followers: data.followers,
    following: data.following,
    publicRepos: data.publicRepos,
    githubUrl: data.htmlUrl,
    location: data.location
  };
};
