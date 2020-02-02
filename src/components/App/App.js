import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';

//Import Components
import Edit from '../Details/Details'
import Details from '../Edit/Edit'
import List from '../List/List'

class App extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'GET_MOVIES' })
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={List} />
          <Route path="/edit" component={Edit} />
          <Route path="/details" component={Edit} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => {
  return (
    {
      reduxStore
    }
  )
}

export default connect(mapStateToProps)(App);
