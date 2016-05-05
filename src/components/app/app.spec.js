import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './app';

describe('<App />', () => {
  let wrapper;
  before(() => {
    wrapper = shallow(<App />);
  });
  it('Should have one <Header/> Component', () => {
    expect(wrapper.find('Header').length).to.equal(1);
  });
});
