import React, { useContext } from 'react';
import { Heading, Pane, UnorderedList, StarIcon } from 'evergreen-ui';
import { ListItem, Text, Link } from '../ui';
import { SearchContext } from '../../context/SearchContext';

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

const SearchResults = () => {
  const { repos } = useContext(SearchContext);

  const NoMatch = () => (
    <Heading size={700} color="rgba(255,255,255, .5)" data-testid="no-match">
      No search results match...
    </Heading>
  );

  return (
    <Pane paddingTop="5%" display="flex" flexDirection="column" alignItems="center">
      {repos?.length === 0 ? <NoMatch/> : repos?.map(repo => (
        <Pane
          key={repo.id}
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
            to={`details/${repo.id}`}
            fontSize="1.5em"
            textTransform="capitalize"
            textAlign="center"
            marginY=".4em"
            padding=".2em"
            data-testid="repo-name"
          >
            {repo.name}
          </Link>
          <Text textAlign="center"><em>Description: </em>{repo.description}</Text>
          <RepoDetail language={repo.language} stars={repo.stargazers_count}/>
        </Pane>
      ))}
    </Pane>
  );
};

export default SearchResults;