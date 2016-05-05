import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './app';

describe('<App />', () => {
  it('Should render "Hello React"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).to.equal('Hello React');
  });
});
