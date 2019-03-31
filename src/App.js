import React, { Component } from "react";
import { connect } from "react-redux";
import SortDropdown from "./components/SortDropdown/SortDropdown";
import "./App.css";
import { sendAmplitudeData } from "./utilities/amplitude";
import { selectOption, resetOption } from "./store/sort";

class App extends Component {
  handleChange = e => {
    sendAmplitudeData("SORT_CHANGE", {
      value: e.value,
      originalValue: this.props.originalSortOption.value
    });
    const selectedOption = this.props.options.find(
      option => option.id === e.id
    );
    this.props.selectOption(selectedOption.id);
  };

  resetSortOption = e => {
    this.props.resetOption(this.props.originalSortOption);
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
    options: state.sort.options,
    selectedSortOption: state.sort.selectedSortOption,
    originalSortOption: state.sort.originalSortOption
  };
}

const mapDispatchToProps = {
  selectOption,
  resetOption
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
