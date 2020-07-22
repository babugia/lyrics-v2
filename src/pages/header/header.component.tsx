import React, { useState, memo } from 'react';
import { FaSearch } from 'react-icons/fa';
import SongList from '../song-list';
import { Styled } from './header.styles';

const Header: React.FC = () => {
  const [song, setSong] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSongChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleFindMusicButtonClicked = () => {
    inputValue && setSong(`suggest/${inputValue}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && handleFindMusicButtonClicked();
  };

  return (
    <Styled.Container>
      <Styled.Input
        type='text'
        onKeyDown={handleKeyDown}
        value={inputValue}
        placeholder='Search for a song or a artist'
        onChange={handleSongChange}
      />

      <Styled.Button onClick={handleFindMusicButtonClicked}>
        Find Music
      </Styled.Button>
      <Styled.SearchIcon>
        <FaSearch onClick={handleFindMusicButtonClicked} />
      </Styled.SearchIcon>
      {song && <SongList song={song} />}
    </Styled.Container>
  );
};

export default memo(Header);
