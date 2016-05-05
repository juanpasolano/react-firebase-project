import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';


import CardsList  from './cards-list';

describe('<CardsList />', () => {
  let wrapper;
  before(() => {
    let props = {
      list:[
        {
          title: 'React Lecture 1',
          author: '@picanteverde'
        },
        {
          title: 'React Lecture 2',
          author: '@picanteverde'
        }
      ]
    };
    wrapper = shallow(<CardsList {...props}/>);
  });
  it('should render 2 thumbnails', () => {
    expect(wrapper.find('.thumbnail').length).to.equal(2);
  });
});
