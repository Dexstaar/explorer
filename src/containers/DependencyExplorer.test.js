import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import { DependencyExplorer } from "./DependencyExplorer";
import dependencyReducer from "../reducers/dependencyReducer";

let renderedDOM = null;
const store = createStore(combineReducers({ dependencies: dependencyReducer }));
let props = {};

describe("DependencyExplorer Suggesstions Test", () => {
  const suggesstionsMock = [
    { name: "suggestion1" },
    { name: "suggestion2" },
    { name: "suggestion3" }
  ];

  it("renders correctly", () => {
    props = {
      loadingSuggestions: fn => fn,
      fetchSuggestions: fn => fn,
      suggestions: suggesstionsMock
    };

    renderedDOM = mount(
      <Provider store={store}>
        <DependencyExplorer {...props} />
      </Provider>
    );
  });

//   it("shows renderedDOM", () => {
//     console.log(renderedDOM.debug());
//   });

  it("shows suggestions on Dropdown", () => {
    // console.log(
    //   renderedDOM
    //     .find("DropdownItem")
    //     .at(0)
    //     .props()
    // );
    expect(
      renderedDOM
        .find("DropdownItem")
        .at(0)
        .props().value
    ).toEqual(suggesstionsMock[0].name);
  });
});
