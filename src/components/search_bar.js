import React from "react";
import "../styles/search_bar.css";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onInputChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
    this.setState({
      term: ""
    })
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Unsplash Images</label>
            <input
              type="text"
              name="search"
              placeholder="Search..."
              value={this.state.term}
              className="search-input"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
