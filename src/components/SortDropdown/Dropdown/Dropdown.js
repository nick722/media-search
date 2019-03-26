import React, { Component } from "react";
import Select from "react-select";

const Dropdown = ({ options, selected, input }) => (
  <Select defaultValue={selected} options={options} />
);

export default Dropdown;
