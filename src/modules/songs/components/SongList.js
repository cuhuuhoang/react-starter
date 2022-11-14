import React from "react";
import {connect} from "react-redux";
import {selectSong} from "../actions";

const SongList = ({songs, selectSong}) => {

  const renderedList = songs.map(song=> {
    return (
      <div key={song.title} data-key={song.title}>
        <div className="row">
          <div className="col-sm-8">{song.title}</div>
          <div className="col-sm-4">
            <button className="btn btn-primary" onClick={() => selectSong(song)}>Select</button>
          </div>
        </div>
        <hr />
      </div>
    );
  })

  return (
    <div>{renderedList}</div>
  );
}

const mapStateToProps = state => {
  return {songs: state.songs};
}

export default connect(mapStateToProps, {selectSong})(SongList);
