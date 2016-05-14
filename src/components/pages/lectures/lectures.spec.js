import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';


import { Lectures } from './lectures';

describe('<Lectures />', () => {
  let wrapper;
  before(() => {
    let props = {
      classes:[]
    };
    wrapper = shallow(<Lectures {...props}/>);
  });
  it('should have a "Lectures" title', () => {
    expect(wrapper.find('h1').text()).to.equal('Lectures');
  });
  it('should have a card list when given classes=[]', () => {
    expect(wrapper.find('CardsList').length).to.equal(1);
  })
});
