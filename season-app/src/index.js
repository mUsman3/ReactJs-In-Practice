import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason";
import Loader from "./Loader";

class App extends React.Component {
  /* 
    we will use another approach instead of this constructor approach.
    we will use state = {latitude: null, errMsg: ""}

   constructor(props) {
    super(props);
    this.state = { latitude: null, errMsg: "" };
  }
   */

  state = { latitude: null, errMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude });
      },
      err => {
        this.setState({ errMsg: err.message });
      }
    );
  }

  render() {
    if (this.state.errMsg && !this.state.latitude) {
      return <div>Error: {this.state.errMsg}</div>;
    } else if (!this.state.errMsg && this.state.latitude) {
      return <DisplaySeason lat={this.state.latitude} />;
    } else return <Loader />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
