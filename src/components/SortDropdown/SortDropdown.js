import React, { Component } from "react";
import Dropdown from "./Dropdown/Dropdown";
import { sendAmplitudeData } from "../../utilities/amplitude";

class SortDropdown extends Component {
  constructor(props) {
    super(props);

    this.options = [
      { id: "relevance", value: "Relevance", label: "Relevance" },
      { id: "DateNewest", value: "Newest Date", label: "Newest Date" },
      { id: "DateOldest", value: "Oldest Date", label: "Oldest Date" }
    ];

    this.state = {
      defaultSelected: {
        id: "relevance",
        value: "Relevance",
        label: "Relevance"
      },
      originalSelected: {
        id: "relevance",
        value: "Relevance",
        label: "Relevance"
      }
    };
  }

  handleChange = e => {
    sendAmplitudeData("SORT_CHANGE", {
      value: e.value,
      originalValue: this.state.originalSelected.value
    });
    const selectedOption = this.options.find(option => option.id === e.id);
    this.setState({ ...this.state, originalSelected: selectedOption });
  };

  render() {
    return (
      <Dropdown
        handleChange={this.handleChange}
        selected={this.state.defaultSelected}
        options={this.options}
      />
    );
  }
}

export default SortDropdown;
