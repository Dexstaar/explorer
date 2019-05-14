import React from "react";
import { shallow } from "enzyme";

import Spinner from "./Spinner";

describe("Spinner display test", () => {
  let renderedDOM = null;

  it("renders correctly", () => {
    renderedDOM = shallow(<Spinner />);
  });

  it("renders elements", () => {
    expect(renderedDOM.find("Dimmer").exists()).toBe(true);
    expect(renderedDOM.find("Loader").exists()).toBe(true);
    expect(renderedDOM.find("Loader").props().children).toEqual("Loading");
  });
});
