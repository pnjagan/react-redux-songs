// Action creator

// eslint-disable-next-line import/prefer-default-export
export const selectSong = song =>  ({
  type   : 'SONG_SELECTED',
  payload: song,
});
