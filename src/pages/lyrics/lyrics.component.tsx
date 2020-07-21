import React, { memo } from 'react';
import { AxiosError } from 'axios';
import { useFetch } from '../../hooks/useFetch';
import { LyricsResponseProps } from '../../shared/types/lyrics-response.props';

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
    <div style={{ padding: '1rem', maxHeight: '90vh', overflowY: 'scroll' }}>
      {!data && !error && <span>Loading...</span>}
      {error?.response?.status === 404 && (
        <span>{error.response.data.error}</span>
      )}
      {data && (
        <div>
          {data.lyrics.split('\n').map((text, index) => (
            <p key={index}>{formatedLyrics(text)}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Lyrics);
