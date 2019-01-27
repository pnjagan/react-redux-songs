import { combineReducers } from 'redux';

const songReducer = () => (
  [
    {
      title   : 'vishnu sahasranama',
      duration: '15:50',
    },
    {
      title   : 'ramaraksha stotram',
      duration: '10:00',
    },
    {
      title   : 'nama ramayanam',
      duration: '8:00',
    },
    {
      title   : 'krishna ashtakam',
      duration: '8:00',
    },
  ]
);

const selectedSongReducer = (selectedSong = null, action) => {
  let retValue = selectedSong;
  if (action.type === 'SONG_SELECTED') {
    retValue =  action.payload;
  }
  return retValue;
};

export default combineReducers(
  {
    songs       : songReducer,
    selectedSong: selectedSongReducer,
  },
);
