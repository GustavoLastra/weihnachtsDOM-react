import React, { Component } from 'react';
import Tree from "./component/Tree.js";
import MyProvider from "./component/shared/provider";

class App extends Component {
  render() {
    return (
        <MyProvider>
            <Tree/>
        </MyProvider>
    );
  }
}

export default App;
