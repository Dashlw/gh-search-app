import React, { useContext } from 'react';
import SelectMenu from '../SelectMenu';
import { Pane } from 'evergreen-ui';
import { SearchContext } from '../../context/SearchContext';

const Dropdowns = () => {
  const { repos, error, dispatch } = useContext(SearchContext);

  const handleLanguages = (value) => {
    dispatch({ type: 'SET_LANGUAGE', payload: value });
  };

  const handleSort = (value) => {
    dispatch({ type: 'SET_SORT_PARAM', payload: value });
  };

  return (
    <Pane
      className="dropdown-box"
      display={(!repos || error) && 'none'}
      marginTop="1em"
      width="100%"
      textAlign="right"
    >
      <SelectMenu handleChange={handleLanguages} defaultLabel="Filter by Language"/>
      <SelectMenu
        handleChange={handleSort}
        options={['Most Stars', 'Least Stars']}
        values={['desc', 'asc']}
        defaultLabel={'Best Match'}
        marginLeft=".8em"
      />
    </Pane>
  );
};
export default Dropdowns;