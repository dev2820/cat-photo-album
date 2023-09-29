const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const normalizerProfile = (rawProfile) => {
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

export const fetchProfile = async (userId) => {
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

    return { userExist: true, ...data };
  } catch (e) {
    if (e.status === 404) {
      return { userExist: false };
    }
    if (e.status >= 500) {
      const errData = await e.json();
      alert(errData.message);
    }

    console.log(e);
  }
};

export const fetchRepos = async (userId, { page = 1 }) => {
  const rawData = await fetch(`/api/users/${userId}/repos?page=${page}`, {
    headers: {
      Autorization: `Bearer ${TOKEN}`
    }
  }).then((res) => res.json());

  return rawData;
};
