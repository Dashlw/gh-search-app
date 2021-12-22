import { createContext, useEffect, useReducer } from 'react';
import { queryBuilder } from '../utils/queryBuilder';
import {initialState, searchReducer } from '../reducers/searchReducer';

export const SearchContext= createContext();

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer,initialState);

  useEffect(() => {

    async function fetchRepos() {
      const url = queryBuilder(state.query, state.language, state.sortParam);
      dispatch({ type: 'LOADING', payload: true });

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (!state.language) {
          dispatch({
            type: 'SET_LANGUAGE_LIST',
            payload: [...new Set(data.items?.map(repo => repo.language))]
          });
        }

        if (response.status >= 400) {
          dispatch({ type: 'ERROR', payload: 'An error has occurred: Bad Request' });
        } else {
          dispatch({
            type: 'SEARCH_COMPLETE', payload: { repos: data.items }
          });
        }
      } catch (error) {
        dispatch({ type: 'ERROR', payload: error.message });
      }
    }

    state.query && fetchRepos();
  }, [state.query, state.language, state.sortParam]);

  const value = {
    repos: state.repos,
    error: state.error,
    loading: state.loading,
    languageList: state.languageList,
    dispatch: dispatch,
  };

  return (
    <SearchContext.Provider value={{ ...value }}>
      {children}
    </SearchContext.Provider>
  );
};
