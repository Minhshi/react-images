import React from "react";
import axios from "axios";
import "../styles/app.css";
import SearchBar from "./search_bar";
import ImageList from "./image_list";

const API_KEY = process.env.REACT_APP_UNSPLASH_API;

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${API_KEY}`
      }
    });
    this.setState({
      images: response.data.results
    });
  };

  render() {
    return (
      <div className="ui-container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
