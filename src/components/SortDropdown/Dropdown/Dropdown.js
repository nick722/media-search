import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    const defaultSelected = this.props.selected;
    return <div>{defaultSelected.label}</div>;
  }
}

export default Dropdown;
