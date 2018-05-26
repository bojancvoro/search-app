import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from "./components/container/listContainer";
import Header from "./components/presentation/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ListContainer />
      </div>
    );
  }
}

export default App;
