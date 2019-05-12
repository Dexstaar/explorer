import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { DependencyExplorer } from './DependencyExplorer';
import dependencyReducer from '../reducers/dependencyReducer';

let renderedDOM = null;
const store = createStore(combineReducers({ dependencies: dependencyReducer }));
let props = {};

describe('DependencyExplorer Loader Test', () => {
	it('renders correctly', () => {
    props = {
        loadingSuggestions: fn => fn,
        fetchSuggestions: fn => fn,
        suggestions: []
    };
    
    renderedDOM = mount(
      <Provider store={store}>
			  <DependencyExplorer {...props} />
      </Provider>
    );

    
  });
  
  it('shows renderedDOM', () => {
    console.log(renderedDOM.debug());
    // expect(renderedDOM.find('Spinner').exists()).toBe(true);
  });
});
