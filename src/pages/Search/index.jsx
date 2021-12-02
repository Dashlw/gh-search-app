import React, { useEffect, useState } from 'react';
import { Pane, Spinner } from 'evergreen-ui';
import useSearchData from '../../hooks/useSearchData';
import SearchResults from '../../components/SearchResults';
import DropdownBlock from '../../components/DropdownBlock';
import SearchField from '../../components/SearchField';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState(null);
  const { repos, error, loading, setRepos, setLanguage, setSortParam } = useSearchData(query);

  let content;
  if (loading) content = (
    <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
      <Spinner/>
    </Pane>
  );
  else content = <SearchResults results={repos}/>;

  useEffect(() => {
    if (repos) setRepos(repos);
  }, [repos, setRepos]);

  return (
    <Pane
      className="search"
      display="flex"
      flexDirection="column"
      paddingTop="3%"
      width="90%"
      maxWidth="550px"
    >
      <SearchField
        error={error}
        query={query}
        setQuery={setQuery}
      />
      <DropdownBlock
        showDropdowns={query && !error}
        query={query}
        setLanguage={setLanguage}
        setSortParam={setSortParam}
      />
      <Pane>
        {content}
      </Pane>
    </Pane>
  );
};

export default Search;
