import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Lectures } from './lectures';

describe('<Lectures />', () => {

  describe('When empty list', () => {
    let wrapper, fetchLecturesSpy;
    before(() => {
      fetchLecturesSpy = sinon.spy();
      let props = {
        lectures: {},
        actions: {fetchLectures: fetchLecturesSpy}
      };
      wrapper = shallow(<Lectures {...props}/>);
    });
    it('should have a "Lectures" title', () => {
      expect(wrapper.find('h1').text()).to.equal('Lectures');
    });
    it('should show "There are no lectures available"', () => {
      expect(wrapper.text()).to.contain('There are no lectures available');
    });
    it('should call fetchLectures once', () => {
      expect(fetchLecturesSpy.calledOnce).to.equal(true);
    });
  });

  describe('When list', () => {
    let wrapper, fetchLecturesSpy;
    before(() => {
      fetchLecturesSpy = sinon.spy();
      let props = {
        lectures: {"sfkd-896dkh-ods23":{title: 'ax34561-s', description: 'dscrpt13on'}},
        actions: {fetchLectures: fetchLecturesSpy}
      };
      wrapper = shallow(<Lectures {...props}/>);
    });
    it('should render list of lectures', ()=> {
    })
  })
});
