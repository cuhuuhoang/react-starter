import React from "react";

const VideoItem = ({ video, onVideoSelect}) => {
  return (
    <div className="pb-2">
      <div onClick={() => onVideoSelect(video)} className="video-item row" >
        <div className="col-sm-6">
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="ui image" style={{ width: '100%'}}/>
        </div>

        <div className="col-sm-6">
          <div className="header"><p>{video.snippet.title}</p></div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem