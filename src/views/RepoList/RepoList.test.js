import React from 'react';
import RepoList from './RepoList';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import nock from 'nock'
import store from '../../store/store'
import flushPromises from 'flush-promises'

Enzyme.configure({ adapter: new Adapter() });


const repos = {
  data: [{
    id: 1,
    name: 'React test',
    description: 'A repository with react'
   },
   {
    id: 2,
    name: 'Vue test',
    description: 'A repository with Vue'
   }]
}

let wrapper = {}
let request = {}

beforeEach(() => {
  // Mock API an Resolve CORS
  const ANY = /.*/gi
  request = nock('https://api.github.com')
  .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
  .get(ANY)
  .reply(200, repos)
  wrapper = Enzyme.shallow(
    <RepoList store={store} >
    </RepoList>
  ).dive()
});

it('should have RepoTableContainer', () => {
  expect(wrapper.find('RepoTableContainer').length).toEqual(1);
});


it('should not have error', () => {
  expect(wrapper.state().error).toEqual(false);
});

it('should be in page 1', () => {
  expect(wrapper.state().page).toEqual(1);
});


it('should make a request', async () => {
  await flushPromises()
  expect(request.isDone()).toBe(true)
});





