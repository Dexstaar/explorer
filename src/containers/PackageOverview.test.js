import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createStore, combineReducers } from "redux";

import { PackageOverview } from "./PackageOverview";
import dependencyReducer from "../reducers/dependencyReducer";
import history from '../utilities/history';

let renderedDOM = null;
const store = createStore(combineReducers({ dependencies: dependencyReducer }));
let props = {};

describe("PackageOverview dependency display test", () => {

  const packpageMock = 'package';
  const dependencyMock = ['dependencyA', 'dependencyB', 'dependencyC' ];

  it("renders correctly", () => {
    props = {
      fetchDependencies: fn => fn,
      dependencies: dependencyMock,
      match: { params : {packageName: packpageMock}}
    };

    renderedDOM = mount(
      <Provider store={store}>
        <Router  history={history}>
          <PackageOverview {...props} />
        </Router>
      </Provider>
    );
  });

  it("displays package", () => {
    expect(renderedDOM.find('Header').at(1).props().children).toEqual(packpageMock);
    expect(renderedDOM.find('p').props().children[3]).toEqual(packpageMock);
  });

  it("displays number of dependencies", () => {
    expect(renderedDOM.find('p').props().children[1]).toEqual(dependencyMock.length);
  });

  it("displays dependencies", () => {
    expect(renderedDOM.find('ListItem').at(0).props().children).toEqual(dependencyMock[0]);
    expect(renderedDOM.find('ListItem').at(1).props().children).toEqual(dependencyMock[1]);
    expect(renderedDOM.find('ListItem').at(2).props().children).toEqual(dependencyMock[2]);
  });

});


describe("PackageOverview Spinner test", () => {

  const packpageMock = 'package';
  const dependencyMock = null;

  it("renders correctly", () => {
    props = {
      fetchDependencies: fn => fn,
      dependencies: dependencyMock,
      match: { params : {packageName: packpageMock}}
    };

    renderedDOM = mount(
      <Provider store={store}>
        <Router  history={history}>
          <PackageOverview {...props} />
        </Router>
      </Provider>
    );
  });

  it("displays Spinner", () => {
    expect(renderedDOM.find('Spinner').exists()).toBe(true);
  });
});

describe("PackageOverview Message test for error", () => {

  const packpageMock = 'package';
  const dependencyMock = 'ERROR';

  it("renders correctly", () => {
    props = {
      fetchDependencies: fn => fn,
      dependencies: dependencyMock,
      match: { params : {packageName: packpageMock}}
    };

    renderedDOM = mount(
      <Provider store={store}>
        <Router  history={history}>
          <PackageOverview {...props} />
        </Router>
      </Provider>
    );
  });

  it("displays Message", () => {
    expect(renderedDOM.find('Message').exists()).toBe(true);
    expect(renderedDOM.find('MessageHeader').props().children).toEqual('Can not get the dependency data');
  });
});

describe("PackageOverview Message test for no data", () => {

  const packpageMock = 'package';
  const dependencyMock = 'NODATA';

  it("renders correctly", () => {
    props = {
      fetchDependencies: fn => fn,
      dependencies: dependencyMock,
      match: { params : {packageName: packpageMock}}
    };

    renderedDOM = mount(
      <Provider store={store}>
        <Router  history={history}>
          <PackageOverview {...props} />
        </Router>
      </Provider>
    );
  });

  it("displays Message", () => {
    expect(renderedDOM.find('Message').exists()).toBe(true);
    expect(renderedDOM.find('MessageHeader').props().children).toEqual('No dependency data found');
  });
});