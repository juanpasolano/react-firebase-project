import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { LectureCard } from './lecture-card';

describe('<LectureCard/>',()=>{
  describe('When access level 1', ()=>{
    it('should render "I attended" button', ()=> {
      let props = {
        lecture: {},
        lectureId: '76sjg',
        accessLevel: 1
      };
      let wrapper = shallow(<LectureCard {...props}/>);
      expect(wrapper.text()).to.contain('I attended');
    });
    it('should render "I did not attended" button when class has been attended', ()=>{
      let uid = 'abcd456';
      let props = {
        lecture: {attendees:{[uid]:{}}},
        lectureId: '76sjg',
        auth:{uid},
        accessLevel: 1
      };
      let wrapper = shallow(<LectureCard {...props}/>);
      expect(wrapper.text()).to.contain('I did not attended');
    });
    it('should not render "see attendees" button', ()=>{
      let props = {
        lecture: {},
        lectureId: '76sjg',
        accessLevel: 1
      };
      let wrapper = shallow(<LectureCard {...props}/>);
      expect(wrapper.text()).to.not.contain('See attendees');
    });
    it('should not render "Edit Lecture" button', ()=>{
      let props = {
        lecture: {},
        lectureId: '76sjg',
        accessLevel: 1
      };
      let wrapper = shallow(<LectureCard {...props}/>);
      expect(wrapper.text()).to.not.contain('Edit lecture');
    });
  });

  describe('When Access Level 2', ()=>{
    it('should render "Edit Lecture" button', ()=>{
      let props = {
        lecture: {},
        lectureId: '76sjg',
        accessLevel: 2
      };
      let wrapper = shallow(<LectureCard {...props}/>);
      expect(wrapper.find('Link').at(0).props().children).to.equal('Edit lecture');
    });
    it('should render "No attendees" button', ()=>{
      let props = {
        lecture: {},
        lectureId: '76sjg',
        accessLevel: 2
      };
      let wrapper = shallow(<LectureCard {...props}/>);
      expect(wrapper.text()).to.contain('No attendees');
    });
    it('should render "See attendees" button', ()=>{
      let props = {
        lecture: {attendees:{'khjdas':{}}},
        lectureId: '76sjg',
        accessLevel: 2
      };
      let wrapper = shallow(<LectureCard {...props}/>);
      expect(wrapper.find('Link').at(0).props().children).to.equal('See attendees');
    });
    it('should not render "I attended" button', ()=> {
      let props = {
        lecture: {},
        lectureId: '76sjg',
        accessLevel: 2
      };
      let wrapper = shallow(<LectureCard {...props}/>);
      expect(wrapper.text()).to.not.contain('I attended');
    });
  });

});
