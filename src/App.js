import React, { Component } from "react";
import { connect } from "react-redux";
import SortDropdown from "./components/SortDropdown/SortDropdown";
import "./App.css";
import { sendAmplitudeData } from "./utilities/amplitude";
import { selectOption, resetOption } from "./store/sort";
import axios from "./axios-media-search";

class App extends Component {
  componentDidMount() {
    axios
      .get("options.json")
      .then(response => console.log("response.data: ", response.data))
      .catch(error => console.log(error));
  }

  handleChange = e => {
    sendAmplitudeData("SORT_CHANGE", {
      value: e.value,
      originalValue: this.props.originalSortOption.value
    });
    const selectedOption = this.props.options.find(
      option => option.id === e.id
    );
    this.props.selectOption(selectedOption.id);

    //todo make http request
    const selectedSortOption = "selectedSortOption";
    axios
      .post("/selectedSortOption.json", selectedSortOption)
      .then(response => console.log("response:", response))
      .catch(error => console.log(error));
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
