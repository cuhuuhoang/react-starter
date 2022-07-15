import React from "react";
import {connect} from "react-redux";

const SongDetail = ({selectedSong}) => {
  return (
    selectedSong ?
    <div>
      <h5>Selected Song</h5>
      <hr/>
      <p>Title: {selectedSong.title}</p>
      <p>Duration: {selectedSong.duration}</p>
    </div> : null
  );
}

const mapStateToProps = state => {
  return {selectedSong: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);