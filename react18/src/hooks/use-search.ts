import { useNavigate } from 'react-router-dom';
import { fetchProfileExist } from 'src/requests/profile';

import { useLastInquiry } from 'src/stores/last-inquiry';

export function useSearch() {
  const navigate = useNavigate();
  const [, actions] = useLastInquiry();
  const { addLastInquiry } = actions;

  const search = async (keyword: string) => {
    const isExist = await fetchProfileExist(keyword);

    if (!isExist) {
      navigate(`/not-exist?id=${keyword}`);
      return;
    }
    navigate(`/users/${keyword}`);
    addLastInquiry(keyword);
  };

  return {
    search
  };
}
