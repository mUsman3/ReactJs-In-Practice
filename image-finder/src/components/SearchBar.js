import React from "react";

class SeachBar extends React.Component {
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmiting(this.state.term);
  };

  state = { term: "" };

  render() {
    return (
      <div className='ui segment'>
        <form type='text' className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SeachBar;
