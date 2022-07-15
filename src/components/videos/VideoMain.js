import React, {useEffect, useState} from "react";
import SearchBar from "../searchbarv1/SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import useVideoSearch from "./useVideoSearch";
import Spinner from "../seasons/Spinner";

const VideoMain = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search, loading] = useVideoSearch();

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="container" style={{marginTop: '10px'}}>
      <SearchBar onSubmit={search} message="Search videos" />
      {loading ?
        <Spinner message="Loading videos" /> :
        <div className="row">
          <div className="col-sm-7">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="col-sm-5">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
            />
          </div>
        </div>
      }
    </div>
  );
}

export default VideoMain