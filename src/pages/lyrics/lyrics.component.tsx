import React, { memo } from 'react';
import { AxiosError } from 'axios';
import { useFetch } from '../../hooks/useFetch';
import { LyricsResponseProps } from '../../shared/types/lyrics-response.props';
import Loading from '../../shared/components/loading';
import { Styled } from './lyrics.styles';

import { LyricsProps } from './lyrics.props';

const formatedLyrics = (text: string) => {
  if (!text) return <br />;
  return text;
};

const Lyrics = (props: LyricsProps) => {
  const { artist, song } = props;
  const url = `v1/${artist}/${song}`;

  const { data, error } = useFetch<LyricsResponseProps, AxiosError>(
    encodeURI(url)
  );

  return (
    <Styled.Container>
      {!data && !error && (
        <Styled.Center>
          <Loading size={3} />
        </Styled.Center>
      )}
      {error?.response?.status === 404 && (
        <Styled.ErrorLabel>{error.response.data.error}</Styled.ErrorLabel>
      )}
      {data && (
        <div>
          {data.lyrics.split('\n').map((text, index) => (
            <Styled.LyricsRow key={index}>
              {formatedLyrics(text)}
            </Styled.LyricsRow>
          ))}
        </div>
      )}
    </Styled.Container>
  );
};

export default memo(Lyrics);
