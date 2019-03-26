import React, { Component } from "react";
import Dropdown from "./Dropdown/Dropdown";

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
      }
    };
  }

  render() {
    return (
      <Dropdown selected={this.state.defaultSelected} options={this.options} />
    );
  }
}

export default SortDropdown;
