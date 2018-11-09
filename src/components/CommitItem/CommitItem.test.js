import React from 'react';
import RepoItem from './RepoItem';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


const repo = {
  name: 'React test',
  descriptio: 'A repository with react'
 }

let wrapper = {}

beforeEach(() => {
  wrapper = Enzyme.shallow(
    <RepoItem repo={repo}></RepoItem>
  );
});

it('renders without crashing', () => {
  expect(wrapper.find('.repo-item__description').length).toEqual(1);
});

it('should render link', () => {
  expect(wrapper.find('.repo-item__link').length).toEqual(1);
});

it('should render link text', () => {
  expect(wrapper.find('.repo-item__link').text()).toEqual('React test');
});


