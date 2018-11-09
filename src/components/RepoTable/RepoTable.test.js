import React from 'react';
import RepoTable from './RepoTable';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  BrowserRouter as Router,
} from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() });


let repos = [{
  id: 1,
  name: 'React test',
  description: 'A repository with react'
 },
 {
  id: 2,
  name: 'Vue test',
  description: 'A repository with Vue'
 }]

let wrapper = {}


let mountComponent = () => {
  return Enzyme.mount(
    <Router>
      <RepoTable repos={repos}></RepoTable>
    </Router>
  );
}

beforeEach(() => {
  wrapper = mountComponent()
});

it('renders without crashing', () => {
  expect(wrapper.find('.repo-item').length).toEqual(2);
});


