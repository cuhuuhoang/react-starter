import './SearchBar.css';
import React, {useState} from "react";

const SearchBar = ({onSubmit, message}) => {
  const [term, setTerm] = useState('');
  const [delayedTerm, setDelayedTerm] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    if (term !== delayedTerm) {
      setDelayedTerm(term);
      onSubmit(term);
    }
  }

  return (
    <div className="form-group has-search rounded">
      <form onSubmit={onFormSubmit}>
        <span className="bi bi-search form-control-feedback"></span>
        <input type="text" className="form-control" placeholder={message} aria-label="Search"
               aria-describedby="search-addon" value={term}
               onChange={e => setTerm(e.target.value)}/>
      </form>
    </div>
  );
}

export default SearchBar;