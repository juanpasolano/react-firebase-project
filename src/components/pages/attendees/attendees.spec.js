import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Attendees } from './attendees';

describe('<Attendees/>',()=>{
  let wrapper, fetchLecturesSpy;
  let routeId = 'lfhd';
  fetchLecturesSpy = sinon.spy();
  let props = {
    lectures:{
      'aghg':{},
      [routeId]:{
        title: '7s0d',
        description: 'j8sh',
        attendees: {
          'l6sj': {
            name: '0gk8',
            date: 1463357998041,
            email: '68sl'
          },
          'l6sk': {
            name: '0gk8',
            date: 1463357998041,
            email: '68sl',
            accepted: true
          },
          'l6sl': {
            name: '0gk8',
            date: 1463357998041,
            email: '68sl',
            accepted: false
          }
        }
      }
    },
    routeParams: {id: routeId},
    actions: {fetchLectures: fetchLecturesSpy}
  };
  before(()=>{
    wrapper = shallow(<Attendees {...props}/>);
  });
  it('should have a link back to lectures', () => {
    let to = wrapper.find('Link').at(0).props().to;
    expect(to).to.equal('/lectures');
  });
  it('should call fetchLectures once', () => {
    expect(fetchLecturesSpy.calledOnce).to.equal(true);
  });
  it('should render title of lecture', () => {
    expect(wrapper.text()).to.contain(props.lectures[routeId].title);
  });
  it('should render attendees', () => {
    expect(wrapper.text()).to.contain(props.lectures[routeId].attendees['l6sj'].name);
    expect(wrapper.text()).to.contain(props.lectures[routeId].attendees['l6sk'].name);
    expect(wrapper.text()).to.contain(props.lectures[routeId].attendees['l6sl'].name);
  });
  it('should render 2 buttons when accepted is undefined', () => {
    let buttons = wrapper.find('.list-group-item').at(0).find('button').length;
    expect(buttons).to.equal(2);
  });
  it('should not render buttons when accepted is defined', () => {
    let buttons = wrapper.find('.list-group-item').at(1).find('button').length;
    expect(buttons).to.equal(0);
    let buttons2 = wrapper.find('.list-group-item').at(2).find('button').length;
    expect(buttons2).to.equal(0);
  });
  it('should render check icon when accepted is true', () => {
    let check = wrapper.find('.list-group-item').at(1).find('.zmdi-check').length;
    expect(check).to.equal(1);
  });
  it('should render cross icon when accepted is false', () => {
    let check = wrapper.find('.list-group-item').at(2).find('.zmdi-close').length;
    expect(check).to.equal(1);
  });
});
