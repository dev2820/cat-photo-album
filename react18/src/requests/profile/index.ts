const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

type RawProfile = {
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  created_at: string;
  updated_at: string;
  followers: number;
  following: number;
  public_repos: number;
  location: string;
};

export type Profile = {
  name: string;
  avatarUrl: string;
  githubUrl: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
  totalFollowers: number;
  totalFollowing: number;
  totalPublicRepos: number;
  location: string;
};

const normalizerProfile = (rawProfile: RawProfile) => {
  return {
    name: rawProfile.name,
    avatarUrl: rawProfile.avatar_url,
    githubUrl: rawProfile.html_url,
    bio: rawProfile.bio,
    createdAt: new Date(rawProfile.created_at),
    updatedAt: new Date(rawProfile.updated_at),
    totalFollowers: rawProfile.followers,
    totalFollowing: rawProfile.following,
    totalPublicRepos: rawProfile.public_repos,
    location: rawProfile.location
  };
};

export const fetchProfile = async (userId: string): Promise<Profile> => {
  const response = await fetch(`/api/users/${userId}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Autorization: `Bearer ${TOKEN}`
    }
  });
  if (!response.ok) throw response;

  const rawData = await response.json();
  const data = normalizerProfile(rawData);
  return data;
};
