import React, { Component } from "react";
import { connect } from "react-redux";
import SortDropdown from "./components/SortDropdown/SortDropdown";
import "./App.css";
import { sendAmplitudeData } from "./utilities/amplitude";

class App extends Component {
  handleChange = e => {
    sendAmplitudeData("SORT_CHANGE", {
      value: e.value,
      originalValue: this.props.originalSortOption.value
      // originalValue: this.state.originalSortOption.value
    });
    const selectedOption = this.props.options.find(
      option => option.id === e.id
    );
    this.props.dispatch({
      type: "SELECT_OPTION",
      selectedSortOption: selectedOption.id
    });
  };

  resetSortOption = e => {
    this.props.dispatch({
      type: "RESET_OPTION",
      selectedSortOption: this.props.originalSortOption
    });
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
