import React, { Component } from 'react';
import Tree from "./component/Tree.js";
import MyProvider from "./shared/provider";

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
