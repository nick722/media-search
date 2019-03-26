import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeApapter from "enzyme-adapter-react-16";
import SortDropdown from "./SortDropdown";

Enzyme.configure({ adapter: new EnzymeApapter() });

describe("SortDropdown", () => {
  const component = shallow(<SortDropdown />);
  it("renders", () => {
    expect(component).toHaveLengh(1);
  });
});
