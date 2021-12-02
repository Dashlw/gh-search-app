export const queryBuilder = (query, language, sortType) => {
  const baseURL = 'https://api.github.com/search/repositories?q=';
  let url;

  if (language && sortType) {
    url = baseURL + encodeURIComponent(query + '+language:' + language) + '&sort=stars&order=' + sortType;

  } else if (sortType) {
    url = baseURL + encodeURIComponent(query) + '&sort=stars&order=' + sortType;

  } else if (language) {
    url = baseURL + encodeURIComponent(query + '+language:' + language);

  } else {
    url = baseURL + encodeURIComponent(query);
  }

  return url + '&per_page=100';
};

