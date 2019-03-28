import React, { Component } from "react";
import { createStore } from "redux";

import { connect } from "react-redux";
import SortDropdown from "./components/SortDropdown/SortDropdown";
import "./App.css";
import { sendAmplitudeData } from "./utilities/amplitude";

const SELECT_OPTION = "SELECT_OPTION";
const RESET_OPTION = "RESET_OPTION";

const initialState = {
  options: [
    { id: "relevance", value: "Relevance", label: "Relevance" },
    { id: "DateNewest", value: "Newest Date", label: "Newest Date" },
    { id: "DateOldest", value: "Oldest Date", label: "Oldest Date" }
  ],
  selectedSortOption: "relevance",
  originalSortOption: "relevance"
};

function reducer(state = initialState, action) {
  console.log("reducer", state, action);

  switch (action.type) {
    case SELECT_OPTION:
      return {
        ...state,
        selectedSortOption: action.selectedSortOption
      };
    case RESET_OPTION:
      return {
        ...state,
        selectedSortOption: action.selectedSortOption
      };
    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
