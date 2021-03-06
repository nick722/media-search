import React, { Component } from "react";
import { connect } from "react-redux";
import SortDropdown from "./components/SortDropdown/SortDropdown";
import "./App.css";
import { sendAmplitudeData } from "./utilities/amplitude";
import axios from "./axios-media-search";
import { fetchOptions } from "./store/options/optionsActions";
import { selectOption } from "./store/sort/sortActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchOptions();
  }

  handleChange = e => {
    sendAmplitudeData("SORT_CHANGE", {
      value: e.value,
      originalValue: this.props.originalSortOption.value
    });
    const selectedOption = this.props.options.find(
      option => option.id === e.id
    );
    this.props.selectOption(selectedOption);
    axios
      .post("/selected.json", selectedOption)
      // .then(response => console.log("response:", response))
      .catch(error => console.log(error));
  };

  resetSortOption = e => {
    this.props.resetOption(this.props.originalSortOption);
  };

  render() {
    const { error, loading, options } = this.props;
    if (error) {
      return <div>Error!! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <button onClick={this.resetSortOption}>Home</button>
        <SortDropdown
          options={options}
          originalSortOption={this.props.originalSortOption}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    options: state.options.items,
    loading: state.options.loading,
    error: state.options.error,
    selectedSortOption: state.sort.selectedSortOption,
    originalSortOption: state.sort.originalSortOption
  };
}

const mapDispatchToProps = dispatch => ({
  fetchOptions: () => dispatch(fetchOptions()),
  selectOption: () => dispatch(selectOption())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
