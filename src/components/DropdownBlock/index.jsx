import React from 'react';
import SelectMenu from '../SelectMenu';
import { Pane } from 'evergreen-ui';

const Dropdowns = ({ showDropdowns, query, setLanguage, setSortParam }) => (
  <Pane
    className={showDropdowns ? 'dropdown-box' : 'hide-box'}
    display={showDropdowns ? 'block' : 'none'}
    marginTop="1em"
    width="100%"
    textAlign="right"
  >
    <SelectMenu query={query} handleChange={setLanguage} defaultLabel={'Filter by Language'}/>
    <SelectMenu
      handleChange={setSortParam}
      options={['Most Stars', 'Least Stars']}
      values={['desc', 'asc']}
      defaultLabel={'Best Match'}
      marginLeft=".8em"
    />
  </Pane>
);
export default Dropdowns;