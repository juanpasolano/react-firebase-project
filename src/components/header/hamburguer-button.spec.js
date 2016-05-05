import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import HamburguerButton from './hamburguer-button';

describe('<HamburguerButton />', () => {
  it('should call props.onClick fn', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<HamburguerButton onClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
  it('should have 3 line icons', () => {
    const wrapper = shallow(<HamburguerButton/>);
    expect(wrapper.find('.icon-bar').length).to.equal(3);
  });
});
