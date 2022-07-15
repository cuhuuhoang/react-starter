import {combineReducers} from "redux";

const songsReducers = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' }
  ]
}

const selectedSongReducers = (selectedSong = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return selectedSong;
  }
}

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducers
})