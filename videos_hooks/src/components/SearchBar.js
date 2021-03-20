import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(term);
  };

  return (
    <div className="search-bar ui segment ">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="searching">Search for a video</label>
          <input
            type="text"
            id="searching"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
