import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props.data);
  }

  render() {
    return (
      <React.Fragment>
        <h4>Result here</h4>
      </React.Fragment>
    );
  }
}
