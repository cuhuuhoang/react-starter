import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect}) => {
  console.log(videos);
  const videoList = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
  });
  return <div>{videoList}</div>;
}

export default VideoList