import React from 'react';
import { Heading, Pane, UnorderedList, StarIcon } from 'evergreen-ui';
import { ListItem, Text, Link } from '../ui';

export const RepoDetail = ({ stars, language, ...props }) =>
  <UnorderedList
    width="90%"
    display="flex"
    marginTop=".3em"
    justifyContent="space-between"
    {...props}
  >
    <ListItem icon={StarIcon} iconColor="yellow">{stars}</ListItem>
    <ListItem listStyle="none">{`Language: ${language}`}</ListItem>
  </UnorderedList>;

const SearchResults = ({ results }) => {

  const NoMatch = () => (
    <Heading size={700} color="rgba(255,255,255, .5)">
      No search results match...
    </Heading>
  );

  return (
    <Pane paddingTop="5%" display="flex" flexDirection="column" alignItems="center">
      {results?.length === 0 ? <NoMatch/> : results?.map(result => (
        <Pane
          key={result.id}
          border="2px solid rgba(255,255,255, .1)"
          borderRadius="4px"
          width="100%"
          marginBottom={24}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding=".3em"
        >
          <Link
            to={`details/${result.id}`}
            fontSize="1.5em"
            textTransform="capitalize"
            textAlign="center"
            marginY=".4em"
            padding=".2em"
            data-testid="repo-name"
          >
            {result.name}
          </Link>
          <Text textAlign="center"><em>Description: </em>{result.description}</Text>
          <RepoDetail language={result.language} stars={result.stargazers_count}/>
        </Pane>
      ))}
    </Pane>
  );
};

export default SearchResults;