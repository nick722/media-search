import React from "react";
import Select from "react-select";

const Dropdown = ({ options, selected, input, handleChange }) => (
  <Select onChange={handleChange} defaultValue={selected} options={options} />
);

export default Dropdown;
