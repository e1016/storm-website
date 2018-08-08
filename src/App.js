import React, { Component } from 'react';

import './App.css';

import Main from './Components/Main'
// import SideBar from './Components/SideBar'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
