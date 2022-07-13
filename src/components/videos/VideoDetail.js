import React from "react";
import './VideoDetail.css';

const VideoDetail = ({video}) => {
  if (!video) {
    return null;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="video-container">
        <iframe src={videoSrc} style={{ width: '100%'}}/>
      </div>
      <div className="ui segment pt-4">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail