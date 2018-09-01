import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from '../../../main/js/components/mock2';

test('Mock changes the className on mousehover', () => {
  // Render CheckboxWithLabel in the document
  const mock2 = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  debugger;

  expect(mock2.text()).toEqual('Off');

  mock2.find('input').simulate('change');

  expect(mock2.text()).toEqual('On');
});
