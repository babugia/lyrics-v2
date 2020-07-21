import React, { memo, useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import Lyrics from '../lyrics';
import { useFetch } from '../../hooks/useFetch';
import { SongListProps } from './song-list.props';
import { SongsResponseProps } from '../../shared/types/songs-response.props';

function applyCors(url: string) {
  const corsUrl = 'http://localhost:8080/';
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
    return <p>Loading...</p>;
  }

  if (data.data.length === 0) {
    return <p>No music found.</p>;
  }

  const next = data.next;
  const prev = data.prev;

  return (
    <div>
      <ul>
        {data.data.map(({ artist, title }, index) => {
          return (
            <li key={`${title}${index}`}>
              <span>
                {artist.name} - {title}
              </span>
              <Popup
                trigger={<button>Lyrics</button>}
                offsetY={20}
                modal
                closeOnDocumentClick
              >
                <Lyrics song={title} artist={artist.name} />
              </Popup>
            </li>
          );
        })}
      </ul>
      {prev && (
        <button onClick={() => setSearchValue(applyCors(prev))}>prev</button>
      )}
      {next && (
        <button onClick={() => setSearchValue(applyCors(next))}>next</button>
      )}
    </div>
  );
};

export default memo(SongList);
