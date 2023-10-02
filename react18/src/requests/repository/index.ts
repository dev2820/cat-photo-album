const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

type RawRepository = {
  id: number;
  name: string;
  clone_url: string;
  created_at: Date;
  owner: RawOwner;
  description: string;
  language: string;
  languages_url: string;
  html_url: string;
  stargazers_count: number;
};

export type Repository = {
  id: number;
  name: string;
  cloneUrl: string;
  createdAt: Date;
  owner: Owner;
  description: string;
  language: string;
  languagesUrl: string;
  url: string;
  stars: number;
};

type RawOwner = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export type Owner = {
  id: string;
  avatarUrl: string;
  githubUrl: string;
};

const normalizeRepository = (rawRepository: RawRepository): Repository => {
  return {
    id: rawRepository.id,
    name: rawRepository.name,
    cloneUrl: rawRepository.clone_url,
    createdAt: new Date(rawRepository.created_at),
    language: rawRepository.language,
    languagesUrl: rawRepository.languages_url,
    owner: normalizeOwner(rawRepository.owner),
    description: rawRepository.description,
    url: rawRepository.html_url,
    stars: rawRepository.stargazers_count
  };
};

const normalizeOwner = (rawOwner: RawOwner): Owner => {
  return {
    id: rawOwner.login,
    avatarUrl: rawOwner.avatar_url,
    githubUrl: rawOwner.html_url
  };
};

export const fetchRepositories = async (userId: string, { page = 1 }): Promise<Repository[]> => {
  const response = await fetch(`/api/users/${userId}/repos?sort=created&page=${page}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Autorization: `Bearer ${TOKEN}`
    }
  });
  if (!response.ok) throw response;

  const rawData: RawRepository[] = await response.json();
  const data = rawData.map(normalizeRepository);

  return data;
};
