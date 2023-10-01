import { useNavigate } from 'react-router-dom';

export function useSearch() {
  const navigate = useNavigate();

  const search = (keyword: string) => {
    navigate(`/${keyword}`);
  };

  return {
    search
  };
}
