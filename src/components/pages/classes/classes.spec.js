import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Classes from './classes';

describe('<Classes />', () => {
  it('should have a "Classes" title', () => {
    const wrapper = shallow(<Classes/>);
    expect(wrapper.find('h1').text()).to.equal('Classes');
  });
});
