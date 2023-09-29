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

const toJson = (res) => res.json();

export const fetchProfile = async (userId) => {
  const rawData = await fetch(`https://api.github.com/users/${userId}`).then(toJson);
  const data = normalizerProfile(rawData);

  return data;
};

export const fetchRepos = async (userId, { page = 1 }) => {
  const rawData = await fetch(`https://api.github.com/users/${userId}/repos?page=${page}`).then(
    toJson
  );

  return rawData;
};
