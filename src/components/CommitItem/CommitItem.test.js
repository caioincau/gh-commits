import React from 'react';
import CommitItem from './CommitItem';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


const commit = {
  sha: 'daijoijiodaijo41',
  commit: {
    message: 'A good commit',
  },
  author: {
    login: 'jack'
  }
 }

let wrapper = {}

beforeEach(() => {
  wrapper = Enzyme.shallow(
    <CommitItem commit={commit}></CommitItem>
  );
});

it('renders without crashing', () => {
  expect(wrapper.find('.commit-item').length).toEqual(1);
});

it('should render sha', () => {
  expect(wrapper.find('.commit-item__sha').text()).toEqual('daijoijiodaijo41');
});

it('should render commit message', () => {
  expect(wrapper.find('.commit-item__message').text()).toEqual('A good commit');
});

it('should render the author name', () => {
  expect(wrapper.find('.commit-item__author').text()).toEqual('jack');
});


