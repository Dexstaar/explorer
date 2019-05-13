import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import sinon from 'sinon';

import { DependencyExplorer } from "./DependencyExplorer";
import suggestionReducer from "../reducers/suggestionReducer";

let renderedDOM = null;
const store = createStore(combineReducers({ suggestions: suggestionReducer }));
let props = {};

describe("DependencyExplorer suggesstions input test", () => {

  const searchTermMock = 'searchterm';
  let mockSubmit = sinon.stub().returns(Promise.resolve());

  it("renders correctly", () => {
    props = {
      loadingSuggestions: fn => fn,
      fetchSuggestions: fn => fn,
      suggestions: [],
      history: { push: fn => fn },
      mockSubmit
    };

    renderedDOM = mount(
      <Provider store={store}>
        <DependencyExplorer {...props} />
      </Provider>
    );
  });

  // it("shows renderedDOM", () => {
  //   console.log(renderedDOM.debug());
  // });

  it(`cannot call submit because didn't input search term`, () => {
    expect(mockSubmit.callCount).toEqual(0);
    renderedDOM.find('form').simulate('submit');
    expect(mockSubmit.callCount).toEqual(0);
  });

  it("shows search term on Dropdown when input", () => {
    expect(renderedDOM.find("DropdownSearchInput").props().value).toEqual('');
    renderedDOM.find("DropdownSearchInput").simulate('change', { target: { value : searchTermMock }});
    expect(renderedDOM.find("DropdownSearchInput").props().value).toEqual(searchTermMock);
  });

  it('calls submit after inputting suggestion', () => {
    expect(mockSubmit.callCount).toEqual(0);
    renderedDOM.find('form').simulate('submit');
    expect(mockSubmit.callCount).toEqual(1);
  });

});

describe("DependencyExplorer suggesstions select test", () => {

  const suggesstionsMock = [
    { name: "suggestion1" },
    { name: "suggestion2" },
    { name: "suggestion3" }
  ];
  let mockSubmit = sinon.stub().returns(Promise.resolve());

  it("renders correctly", () => {
    props = {
      loadingSuggestions: fn => fn,
      fetchSuggestions: fn => fn,
      suggestions: suggesstionsMock,
      history: { push: fn => fn },
      mockSubmit
    };

    renderedDOM = mount(
      <Provider store={store}>
        <DependencyExplorer {...props} />
      </Provider>
    );
  });

  it("shows suggestions on Dropdown", () => {
    expect(renderedDOM.find("DropdownItem").at(0).props().value).toEqual(suggesstionsMock[0].name);
    expect(renderedDOM.find("DropdownItem").at(1).props().value).toEqual(suggesstionsMock[1].name);
    expect(renderedDOM.find("DropdownItem").at(2).props().value).toEqual(suggesstionsMock[2].name);
  });

  it(`cannot call submit because didn't select search term`, () => {
    expect(mockSubmit.callCount).toEqual(0);
    renderedDOM.find('form').simulate('submit');
    expect(mockSubmit.callCount).toEqual(0);
  });

  it("selects suggestion", () => {
    expect(renderedDOM.find("DropdownItem").at(0).props().active).toEqual(false);
    expect(renderedDOM.find("DropdownItem").at(1).props().active).toEqual(false);
    expect(renderedDOM.find("DropdownItem").at(2).props().active).toEqual(false);
    renderedDOM.find("DropdownItem").at(1).simulate('click');
    expect(renderedDOM.find("DropdownItem").at(0).props().active).toEqual(false);
    expect(renderedDOM.find("DropdownItem").at(1).props().active).toEqual(true);
    expect(renderedDOM.find("DropdownItem").at(2).props().active).toEqual(false);
  });

  it('calls submit after selecting suggestion', () => {
    expect(mockSubmit.callCount).toEqual(0);
    renderedDOM.find('form').simulate('submit');
    expect(mockSubmit.callCount).toEqual(1);
  });
});

