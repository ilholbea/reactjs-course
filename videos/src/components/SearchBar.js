import React from 'react';

export default class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment ">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="searching"> Video Search</label>
            <input
              type="text"
              id="searching"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
