import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, ChevronLeftIcon, Icon, majorScale, Pane } from 'evergreen-ui';
import { Link, Text } from '../../components/ui';
import { RepoDetail } from '../../components/SearchResults';
import { SearchContext } from '../../context/SearchContext';
import './Detail.css';

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { repos } = useContext(SearchContext);
  const [detail, setDetail] = useState();

  useEffect(() => {
    setDetail(repos?.find(obj => obj.id.toString() === id));
  }, [repos, id, detail]);

  return (
    <Pane width="90%" maxWidth="500px" paddingBottom="5em">
      <Button
        onClick={() => navigate(-1)}
        appearance="minimal"
        backgroundColor="transparent"
        height={majorScale(5)}
        padding=".9em"
        color="rgba(255,255,255, .8)"
      >
        <Icon icon={ChevronLeftIcon} size={18} marginRight=".5em"/>
        <Text textTransform="uppercase">Back</Text>
      </Button>

      {detail && (
        <Pane display="flex" flexDirection="column" alignItems="center" marginTop="1em">
          <Pane is="img" src={detail.owner.avatar_url} alt="avatar" height="15em" width="15em"/>
          <Link
            is="a"
            href={detail.html_url}
            target="_blank"
            rel="noreferrer"
            fontSize="2em"
            textTransform="capitalize"
            marginTop=".5em"
            padding=".3em"
            textAlign="center"
            lineHeight="30px"
          >
            {detail.name}
          </Link>
          <Pane
            padding="1em"
            border="2px solid rgba(255,255,255, .1)"
            borderRadius="4px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop=".8em"
          >
            <Text textAlign="center" color="white" marginBottom="1em" fontSize="1.3em">
              Owner: {detail.owner.login}
            </Text>
            <Text textAlign="center" marginBottom=".8em">{detail.description}</Text>
            <RepoDetail language={detail.language} stars={detail.stargazers_count}/>
            <Text
              is="div"
              marginTop="1em"
              marginRight="auto"
              color="rgba(255,255,255, .5)"
              fontSize="12px">
              <em>Created: {detail.created_at}</em>
            </Text>
          </Pane>
        </Pane>
      )}
    </Pane>

  );
};

export default Detail;