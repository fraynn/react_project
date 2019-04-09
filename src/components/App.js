import React, { Component, Fragment } from "react";
import {connect} from 'react-redux';
import logo from "../assets/logo.svg";
import "../assets/css/App.css";
import data from "../data";
import ReferenceList from "./ReferenceList";

import { getReferences } from '../actions';

class App extends Component {
  
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getReferences(data));
  }

  render() {
    const {references} = this.props;
    return (
      <Fragment>
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
            Learn React
          </a>
        </header>
        <main>
          <ReferenceList data={references} />
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  references: state.references,
  displayFilter: state.displayFilter
});

export default connect(mapStateToProps)(App);
