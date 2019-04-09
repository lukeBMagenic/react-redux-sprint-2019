import React from 'react';
import { shallow } from "enzyme";

import Toggle from './Toggle';

describe("Toggle", () => {
  it("should render correctly", () => {
    const component = shallow(<Toggle />);

    expect(component).toMatchSnapshot();
  });
});