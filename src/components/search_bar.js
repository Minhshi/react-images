import React from "react";
import "../styles/search_bar.css";

class SearchBar extends React.Component {
  onInputChange = event => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <h1>Unsplash Images</h1>
        <form className="ui form">
          <div className="field">
            <input
              type="text"
              name="search"
              placeholder="Search..."
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
