import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Header } from './header';


describe('<Header />', () => {
  let wrapper;
  before(function(){
    wrapper = shallow(<Header />);
  });
  it('Should have a link to the homepage', () => {
    let to = wrapper.find('Link').at(0).props().to;
    expect(to).to.equal('/');
  });
});
