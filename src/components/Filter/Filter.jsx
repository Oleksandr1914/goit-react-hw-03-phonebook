import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterInput } from './FilterList';

class Filter extends Component {
  render() {
    return (
      <>
        <h3>Find contcts by name</h3>
        <FilterInput
          type="text"
          name="filter"
          value={this.props.FilterInput}
          onChange={this.props.onFilter}
        />
      </>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  FilterInput: PropTypes.string,
};

export default Filter;
