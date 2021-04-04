import './App.css';

import React from 'react';

import User from './User';
//import { createPow } from "@textile/powergate-client"
class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <User />
      </div>
    );
  }
}

export default App;