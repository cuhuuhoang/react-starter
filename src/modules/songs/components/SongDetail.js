import React from "react";
import {connect} from "react-redux";

const SongDetail = ({selectedSong}) => {
  return (
    selectedSong ?
    <div data-testid="selected-song">
      <h5>Selected Song</h5>
      <hr/>
      <p data-testid="detailed-title">Title: {selectedSong.title}</p>
      <p data-testid="detailed-duration">Duration: {selectedSong.duration}</p>
    </div> : null
  );
}

const mapStateToProps = state => {
  return {selectedSong: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);
