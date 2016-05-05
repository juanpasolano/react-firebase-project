import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';


import { Classes } from './classes';

describe('<Classes />', () => {
  let wrapper;
  before(() => {
    let props = {
      classes:[]
    };
    wrapper = shallow(<Classes {...props}/>);
  });
  it('should have a "Classes" title', () => {
    expect(wrapper.find('h1').text()).to.equal('Classes');
  });
  it('should have a card list when given classes=[]', () => {
    expect(wrapper.find('CardsList').length).to.equal(1);
  })
});
