import React from "react";
import SearchBar from "../searchbarv1/SearchBar";
import youtube from "./youtube";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class VideoMain extends React.Component {
  state = {videos: [], selectedVideo: null}

  onSearchSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {q: term}
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0] });
  }

  onVideoSelect = video => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div className="container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} message="Search videos" />
        <div className="row">
          <div className="col-sm-7">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="col-sm-5">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default VideoMain