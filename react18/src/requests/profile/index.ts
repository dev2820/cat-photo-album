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

type Success<T> = {
  dataExist: true;
  data: T;
};

type Failed = {
  dataExist: false;
};

export type Profile = {
  name: string;
  avatarUrl: string;
  githubUrl: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
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
    createdAt: rawProfile.created_at,
    updatedAt: rawProfile.updated_at,
    totalFollowers: rawProfile.followers,
    totalFollowing: rawProfile.following,
    totalPublicRepos: rawProfile.public_repos,
    location: rawProfile.location
  };
};

export const fetchProfile = async (userId: string): Promise<Success<Profile> | Failed> => {
  try {
    const response = await fetch(`/api/users/${userId}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Autorization: `Bearer ${TOKEN}`
      }
    });
    if (!response.ok) throw response;

    const rawData = await response.json();
    const data = normalizerProfile(rawData);

    return { dataExist: true, data };
  } catch (e) {
    if (e instanceof Response && e.status === 404) {
      return { dataExist: false };
    }
    if (e instanceof Response && e.status >= 500) {
      const errData = await e.json();
      alert(errData.message);

      return { dataExist: false };
    }

    console.error(e);
    return { dataExist: false };
  }
};

export const fetchRepos = async (userId: string, { page = 1 }) => {
  const rawData = await fetch(`/api/users/${userId}/repos?page=${page}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Autorization: `Bearer ${TOKEN}`
    }
  }).then((res) => res.json());

  return rawData;
};
