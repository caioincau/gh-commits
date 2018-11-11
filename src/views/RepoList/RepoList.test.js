import React from 'react'
import RepoList from './RepoList'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import nock from 'nock'
import store from '../../store/store'
import flushPromises from 'flush-promises'

Enzyme.configure({ adapter: new Adapter() })


const repos = {
  data: [{
    id: 1,
    name: 'React test',
    description: 'Repository with react',
    stargazers_count: 100
   },
   {
    id: 2,
    name: 'A Vue test',
    description: 'A repository with Vue',
    stargazers_count: 10
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
})

it('should have RepoTableContainer', () => {
  expect(wrapper.find('RepoTableContainer').length).toEqual(1)
})


it('should not have error', () => {
  expect(wrapper.state().error).toEqual(false)
})

it('should be in page 1', () => {
  expect(wrapper.state().page).toEqual(1)
})


it('should make a request', async () => {
  await flushPromises()
  expect(request.isDone()).toBe(true)
})

it('should sort by name', () => {
  const NEW_LIST = wrapper.instance().sort(repos.data, 'name')
  expect(NEW_LIST[0].id).toBe(2)
})


it('should sort by description', () => {
  const NEW_LIST = wrapper.instance().sort(repos.data, 'description')
  expect(NEW_LIST[0].description).toBe('A repository with Vue')
})

it('should sort by stargazers_count', () => {
  const NEW_LIST = wrapper.instance().sort(repos.data, 'stargazers_count')
  expect(NEW_LIST[0].stargazers_count).toBe(100)
})

it('should set the sort item by name on click', () => {
  wrapper.find('.btn').at(0).simulate('click');
  expect(wrapper.instance().state.order_by).toBe('name')
})


it('should set the sort item by stars on click', () => {
  wrapper.find('.btn').at(2).simulate('click');
  expect(wrapper.instance().state.order_by).toBe('stargazers_count')
})





