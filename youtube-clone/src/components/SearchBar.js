import React from "react";
import ReactDOM from "react-dom";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({
      term: event.target.value
    });
  };
  onFromSubmit = event => {
    event.preventDefault();

    // make sure we callback from parent component
  };
  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui from' onSubmit={this.onFromSubmit}>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
