import { toCamel } from "src/utils/object";

export type Profile = {
  name: string;
  avatarUrl: string;
  bio: string;
  followers:number;
  following:number;
  repos: number;
  githubUrl: string;
};

export const getProfile = async (userId: string): Promise<Profile> => {
  const res = await fetch(`https://api.github.com/users/${userId}`);
  const data = toCamel(await res.json());

  return {
    avatarUrl: data.avatarUrl,
    name: data.name,
    bio: data.bio,
    followers: data.followers,
    following: data.following,
    repos: data.publicRepos,
    githubUrl: data.htmlUrl
  };
};
