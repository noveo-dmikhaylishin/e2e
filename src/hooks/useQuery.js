import { useCallback, useState } from 'react';

const defaultInitialQuery = {
  page: 1,
};

export const useQuery = ({ initialQuery = defaultInitialQuery } = {}) => {
  const [query, setQuery] = useState(initialQuery);

  const changeQuery = useCallback(
    (newQuery) => {
      setQuery((prevQuery) => ({ ...prevQuery, ...newQuery }));
    },
    [setQuery]
  );

  const changePage = useCallback(
    (page) => {
      setQuery((prevQuery) => {
        if (page === prevQuery.page) {
          return prevQuery;
        }

        return { ...prevQuery, page };
      });
    },
    [changeQuery]
  );

  return {
    query,
    changeQuery,
    changePage,
  };
};
