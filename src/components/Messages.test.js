import React from 'react';
import { shallow } from 'enzyme';

import Messages from './Messages';


describe('Messages display test', () => {
    let renderedDOM = null;
  
    const props = {
      message: 'message mock'
    };
  
    it('renders correctly', () => {
        renderedDOM = shallow(<Messages {...props} />);
    });
  
    it('renders elements', () => {
      expect(renderedDOM.find('MessageHeader').props().children).toEqual(props.message);
    });
  });
  