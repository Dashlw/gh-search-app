import {initialState, searchReducer } from './searchReducer';

describe('searchReducer', () => {
  it('returns new state for SEARCH_COMPLETE type', () => {
    const updateAction = {type: 'SEARCH_COMPLETE', payload: { repos: [1, 2, 3] } };
    const updatedState = searchReducer(initialState, updateAction);
    expect(updatedState).toEqual({ ...initialState, repos: [1, 2, 3] });
  });
})
