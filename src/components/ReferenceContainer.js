import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { toggleBookmark, SHOW_ALL, SHOW_BOOKMARKED, setFilter } from '../actions';
import ReferenceList from './ReferenceList';

class ReferenceContainer extends Component {

  render() {
    const { references, handleFilter, toggleBookmark } = this.props;
    return (
      <Fragment>
        <header>
          <h1>Welcome</h1>
          <button onClick={() => handleFilter(SHOW_ALL)}>Show all</button>
          <button onClick={() => handleFilter(SHOW_BOOKMARKED)}>Show bookmarked</button>
        </header>
        <main>
          <ReferenceList data={references} toggleBookmark={toggleBookmark} />
        </main>
      </Fragment>
    )
  }
}

const getFilteredReferences = (references, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return references;
    case SHOW_BOOKMARKED:
      return references.filter(ref => ref.bookmarked);
    default:
      return references;
  }
}

const mapStateToProps = state => ({
  references: getFilteredReferences(state.references, state.displayFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleBookmark: key => dispatch(toggleBookmark(key)),
  handleFilter: filter => dispatch(setFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReferenceContainer);