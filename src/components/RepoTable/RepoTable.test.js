import React from 'react';
import RepoTable from './RepoTable';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


let repos = [{
  id: 1,
  name: 'React test',
  descriptio: 'A repository with react'
 },
 {
  id: 2,
  name: 'Vue test',
  descriptio: 'A repository with Vue'
 }]

let wrapper = {}


let mountComponent = () => {
  return Enzyme.mount(
    <RepoTable repos={repos}></RepoTable>
  );
}

beforeEach(() => {
  wrapper = mountComponent()
});

it('renders without crashing', () => {
  expect(wrapper.find('.repo-item').length).toEqual(2);
});


