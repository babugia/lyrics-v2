import React, { useState, memo } from 'react';
import SongList from '../song-list';

const Header: React.FC = () => {
  const [song, setSong] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSongChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleFindMusicButtonClicked = () => {
    inputValue && setSong(`suggest/${inputValue}`);
  };

  return (
    <>
      <input type='text' value={inputValue} onChange={handleSongChange} />
      <button onClick={handleFindMusicButtonClicked}>Find Music</button>
      {song && <SongList song={song} />}
    </>
  );
};

export default memo(Header);
