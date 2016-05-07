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
});
