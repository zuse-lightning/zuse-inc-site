import React, { Component } from "react";
import { Header } from "semantic-ui-react";

import "./style.css";

class App extends Component {
  render() {
    return (
      <>
        <Header id="test-header" as="h1">Test Heading</Header>
      </>
    );
  }
}

export default App;
