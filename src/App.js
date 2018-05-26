import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplaySearch from "./components/container/displaysearch";
import Header from "./components/presentation/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DisplaySearch />
      </div>
    );
  }
}

export default App;
