import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getReferences } from '../actions';
import ReferenceContainer from './ReferenceContainer';
import data from '../data';

class App extends Component {
  
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getReferences(data));
  }

  render() {
    const {references} = this.props;
    return (
        <ReferenceContainer references={references} />
    );
  }
}

const mapStateToProps = state => ({
  references: state.references,
  displayFilter: state.displayFilter
});

export default connect(mapStateToProps)(App);
