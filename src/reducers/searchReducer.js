export const initialState = {
  repos: null,
  languageList: [],
  error: null,
  loading: false,
  query: null,
  language: null,
  sortParam: null,
};

const SEARCH_COMPLETE = 'SEARCH_COMPLETE';
const LOADING = 'LOADING';
const ERROR = 'ERROR';
const SET_QUERY = 'SET_QUERY';
const SET_LANGUAGE = 'SET_LANGUAGE';
const SET_SORT_PARAM = 'SET_SORT_PARAM';
const SET_LANGUAGE_LIST = 'SET_LANGUAGE_LIST';

export const searchReducer = (state, action) => {
  if (action.type === SET_QUERY) {

    return {
      ...state,
      query: action.payload,
      loading: false,
    };
  }

  if (action.type === SET_LANGUAGE) {
    return {
      ...state,
      language: action.payload,
      loading: false,
    };
  }

  if (action.type === SET_SORT_PARAM) {
    return {
      ...state,
      sortParam: action.payload,
      loading: false,
    };
  }

  if (action.type === SET_LANGUAGE_LIST) {
    return {
      ...state,
      languageList: action.payload,
      loading: false,
    };
  }

  if (action.type === SEARCH_COMPLETE) {
    return {
      ...state,
      repos: action.payload.repos,
      loading: false,
    };
  }

  if (action.type === LOADING) {
    return {
      ...state,
      loading: action.payload,
    };
  }

  if (action.type === ERROR) {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  }

  return state;
};
