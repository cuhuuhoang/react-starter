import React from "react";
import unsplash from "./unsplash";
import SearchBar from "../searchbar/SearchBar";
import ImageList from "./ImageList";
import Spinner from "../seasons/Spinner";

class PicMain extends React.Component {
  state = {images: [], loading: false}

  onSearchSubmit = async term => {
    this.setState({loading: true});
    const response = await unsplash.get('/search/photos', {
      params: {query: term}
    });

    this.setState({images: response.data.results });
    this.setState({loading: false});
  }
  render() {
    return (
      <div className="container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} message="Search pictures" />
        {this.state.loading ?
          <Spinner message="Loading image.." /> :
          <ImageList images={this.state.images} />
        }
      </div>
    );
  }
}

export default PicMain