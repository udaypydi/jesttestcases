import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieAction } from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchMovieAction('batman'));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning Jest
          </a>
        </header>
      </div>
    );
  }
}

export default connect()(App);
