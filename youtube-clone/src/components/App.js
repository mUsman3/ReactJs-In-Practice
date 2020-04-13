import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

class App extends React.Component {
  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: { q: term }
    });
    console.log(response);
  };
  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
