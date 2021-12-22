import React, { useContext } from 'react';
import { Pane, Spinner } from 'evergreen-ui';
import SearchResults from '../../components/SearchResults';
import DropdownBlock from '../../components/DropdownBlock';
import SearchField from '../../components/SearchField';
import { SearchContext } from '../../context/SearchContext';
import './Search.css';

const Search = () => {
  const { loading } = useContext(SearchContext);

  let content;
  if (loading) content = (
    <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
      <Spinner/>
    </Pane>
  );
  else content = <SearchResults/>;

  return (
    <Pane
      className="search"
      display="flex"
      flexDirection="column"
      paddingTop="3%"
      width="90%"
      maxWidth="550px"
    >
      <SearchField/>
      <DropdownBlock/>
      <Pane>
        {content}
      </Pane>
    </Pane>
  );
};

export default Search;
