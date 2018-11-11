import React from 'react'
import RepoDetails from './RepoDetails'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import nock from 'nock'
import store from '../../store/store'
import flushPromises from 'flush-promises'

Enzyme.configure({ adapter: new Adapter() })


const commits = {
  data: [{
    sha: 'daijoijiodaijo41',
    commit: {
      message: 'A good commit',
    },
    author: {
      login: 'jack'
    }
  },
  {
    sha: '32109312j09',
    commit: {
      message: 'A bad commit',
    },
    author: {
      login: 'ryan'
    }
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
  .reply(200, commits)
  wrapper = Enzyme.shallow(
    <RepoDetails
    match={{params: {id: 'awesome-vue'}, isExact: true, path: '', url: ''}}
    store={store} >
    </RepoDetails>
  ).dive()
})

it('renders without crashing', () => {
  expect(wrapper.find('.card').length).toEqual(1)
})

it('should have filter', () => {
  expect(wrapper.find('Filter').length).toEqual(1)
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





