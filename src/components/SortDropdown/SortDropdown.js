import React, { Component } from "react";
import Dropdown from "./Dropdown/Dropdown";
import { sendAmplitudeData } from "../../utilities/amplitude";

class SortDropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dropdown
        handleChange={this.props.handleChange}
        selected={this.props.originalSortOption}
        options={this.props.options}
      />
    );
  }
}

export default SortDropdown;
