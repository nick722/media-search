import React, { Component } from "react";
import { connect } from "react-redux";
import SortDropdown from "./components/SortDropdown/SortDropdown";
import "./App.css";
import { sendAmplitudeData } from "./utilities/amplitude";
import { selectOption, resetOption } from "./store/store";

class App extends Component {
  handleChange = e => {
    sendAmplitudeData("SORT_CHANGE", {
      value: e.value,
      originalValue: this.props.originalSortOption.value
    });
    const selectedOption = this.props.options.find(
      option => option.id === e.id
    );
    this.props.dispatch(selectOption(selectedOption.id));
  };

  resetSortOption = e => {
    this.props.dispatch(resetOption(this.props.originalSortOption));
  };

  render() {
    return (
      <>
        <button onClick={this.resetSortOption}>Home</button>
        <SortDropdown
          options={this.props.options}
          originalSortOption={this.props.originalSortOption}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    options: state.options,
    selectedSortOption: state.selectedSortOption,
    originalSortOption: state.originalSortOption
  };
}

export default connect(mapStateToProps)(App);
