import React, { memo, useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Lyrics from '../lyrics';
import { useFetch } from '../../hooks/useFetch';
import { SongListProps, SongsResponseProps } from './song-list.props';
import Loading from '../../shared/components/loading';
import { CORS_URL } from '../../shared/constants';
import { Styled } from './song-list.styles';

function applyCors(url: string) {
  const corsUrl = CORS_URL;
  return corsUrl.concat(url);
}

const SongList = (props: SongListProps) => {
  const { song } = props;
  const [searchValue, setSearchValue] = useState(song);
  const { data } = useFetch<SongsResponseProps>(searchValue);

  useEffect(() => {
    if (song) setSearchValue(song);
    return () => {
      setSearchValue('');
    };
  }, [song]);

  if (!data) {
    return (
      <Styled.Center>
        <Loading />
      </Styled.Center>
    );
  }

  if (data.data.length === 0) {
    return <Styled.NotFoundLabel>No music found.</Styled.NotFoundLabel>;
  }

  const next = data.next;
  const prev = data.prev;

  return (
    <Styled.Container>
      <Styled.List>
        {data.data.map(({ artist, title }, index) => {
          return (
            <Styled.ListItem key={`${title}${index}`}>
              <Styled.Label>
                {artist.name} - {title}
              </Styled.Label>
              <Styled.Modal
                trigger={<Styled.LyricsButton>Lyrics</Styled.LyricsButton>}
                offsetY={20}
                modal
                closeOnDocumentClick
              >
                <Lyrics song={title} artist={artist.name} />
              </Styled.Modal>
            </Styled.ListItem>
          );
        })}
      </Styled.List>
      <Styled.ButtonsContainer prev={Boolean(prev)}>
        {prev && (
          <Styled.NextAndPrevButton
            onClick={() => setSearchValue(applyCors(prev))}
          >
            <FaChevronLeft />
          </Styled.NextAndPrevButton>
        )}
        {next && (
          <Styled.NextAndPrevButton
            onClick={() => setSearchValue(applyCors(next))}
          >
            <FaChevronRight />
          </Styled.NextAndPrevButton>
        )}
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
};

export default memo(SongList);
