import { toCamel } from "src/utils/object";

export type Profile = {
  avatarUrl: string;
};
export const getProfile = async (userId: string): Promise<Profile> => {
  const res = await fetch(`https://api.github.com/users/${userId}`);
  const data = toCamel(await res.json());

  const profile = {
    avatarUrl: data.avatarUrl,
  };

  return profile;
};
