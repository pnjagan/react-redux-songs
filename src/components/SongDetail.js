import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  console.log(song);

  if (!song) {
    return <div>Selec a song </div>;
  }
  return <div>{song.title} </div>;
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
