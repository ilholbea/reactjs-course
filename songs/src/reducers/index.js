import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4:05' },
    { title: 'In the end', duration: '3:15' },
    { title: 'Snuff', duration: '8:05' },
    { title: 'Iridescent', duration: '3:45' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
