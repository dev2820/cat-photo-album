export type RawProfile = {
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
  location: string;
  login: string;
};

export type RawFollower = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export type Profile = {
  name: string;
  avatarUrl: string;
  bio: string;
  followers: number;
  following: number;
  publicRepos: number;
  githubUrl: string;
  location: string;
  login: string;
};

export type Follower = {
  name: string;
  avatarUrl: string;
  githubUrl: string;
};

export const defaultProfile = {
  name: '',
  avatarUrl: '',
  bio: '',
  followers: 0,
  following: 0,
  publicRepos: 0,
  githubUrl: '',
  location: '',
  login: '',
};

const normalizeProfile = (rawProfile: RawProfile) => ({
  avatarUrl: rawProfile.avatar_url,
  name: rawProfile.name,
  login: rawProfile.login,
  bio: rawProfile.bio,
  followers: rawProfile.followers,
  following: rawProfile.following,
  publicRepos: rawProfile.public_repos,
  githubUrl: rawProfile.html_url,
  location: rawProfile.location,
});

const normalizeFollower = (rawFollower: RawFollower) => ({
  name: rawFollower.login,
  avatarUrl: rawFollower.avatar_url,
  githubUrl: rawFollower.html_url,
});

export const getProfile = async (userId: string): Promise<Profile> => {
  const res = await fetch(`https://api.github.com/users/${userId}`);
  const rawProfile = await res.json();
  const profile = normalizeProfile(rawProfile);

  return profile;
};

export const getFollowers = async (userId: string): Promise<Follower[]> => {
  const res = await fetch(`https://api.github.com/users/${userId}/followers`);
  const rawFollowers = await res.json();
  const followers = rawFollowers.map(normalizeFollower);

  return followers;
};
