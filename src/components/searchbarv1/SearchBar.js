import './SearchBar.css';
import React from "react";

class SearchBar extends React.Component {
  state = {term: ''};

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="form-group has-search rounded">
        <form onSubmit={this.onFormSubmit}>
          <span className="bi bi-search form-control-feedback"></span>
          <input type="text" className="form-control" placeholder={this.props.message} aria-label="Search"
                 aria-describedby="search-addon" value={this.state.term}
                 onChange={e => this.setState({term: e.target.value})}/>
        </form>
      </div>
    )
  }
}

SearchBar.defaultProps = {
  message: 'Search'
}

export default SearchBar;