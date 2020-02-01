import React, { Component } from 'react';
import './App.css';

//Import Components
import Details from '../Details/Details'
import Edit from '../Edit/Edit'
import List from '../List/List'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <List />
        <Edit />
        <Details />
      </div>
    );
  }
}

export default App;
