import { useState, useEffect, useContext } from 'react';
import SearchContext from '../context/SearchContext';
import { queryBuilder } from '../utils/queryBuilder';

export default function useSearchData(query) {
  const [repos, setRepos] = useContext(SearchContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [languageList, setLanguageList] = useState([]);
  const [language, setLanguage] = useState(null);
  const [sortParam, setSortParam] = useState(null);

  useEffect(() => {
    !query ? setRepos(null) : fetchRepos();

    async function fetchRepos() {
      const url = queryBuilder(query, language, sortParam);

      setLoading(true);
      setError(null);

      const res = await fetch(url);

      if (res.status >= 500) setError('Server error');
      if (res.status >= 400) setError('An error has occurred: Bad Request');

      const json = await res.json();

      setRepos(json.items);
      setLanguageList([...new Set(json.items?.map(repo => repo.language))]);
      setLoading(false);
    }
  }, [query, language, sortParam, setRepos]);

  return { repos, error, loading, languageList, setRepos, setLanguage, setSortParam };
}