import React, { useContext, useState } from 'react';
import { Button, majorScale, Pane, TextInputField } from 'evergreen-ui';
import './SearchField.css';
import { SearchContext } from '../../context/SearchContext';

const SearchField = () => {
  const [inputValue, setInputValue] = useState('');
  const { dispatch, error } = useContext(SearchContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'SET_QUERY', payload: inputValue});

      }}
    >
      <Pane className="search-field" display="flex">
        <TextInputField
          isInvalid={!!error}
          validationMessage={error}
          width="100%"
          marginRight={8}
          label=""
          placeholder="Search Repos in Github"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
          data-testid="search-input"
        />
        <Button appearance="primary" marginTop=".55em" height={majorScale(5)}>
          Search
        </Button>
      </Pane>
      <Button
        className="clear"
        appearance="minimal"
        marginTop="-2em"
        padding={0}
        width="fit-content"
        color="rgba(255,255,255, .5)"
        onClick={() => window.location.reload()}
        height={majorScale(5)}
      >
        Clear Results
      </Button>
    </form>
  );
};

export default SearchField;