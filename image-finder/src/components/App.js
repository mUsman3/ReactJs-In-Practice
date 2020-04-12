import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(terms) {
    console.log(terms);
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onSubmiting={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
