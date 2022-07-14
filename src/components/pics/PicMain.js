import React from "react";
import unsplash from "./unsplash";
import SearchBar from "../searchbarv1/SearchBar";
import ImageList from "./ImageList";

class PicMain extends React.Component {
  state = {images: []}

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {query: term}
    });

    this.setState({images: response.data.results });
  }
  render() {
    return (
      <div className="container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} message="Search pictures" />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default PicMain