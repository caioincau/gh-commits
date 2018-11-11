import React from 'react'
import RepoItem from './RepoItem'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })


const repo = {
  name: 'React test',
  description: 'A repository with react'
}

let wrapper = {}

beforeEach(() => {
  wrapper = Enzyme.mount(
    <Router>
      <table>
        <tbody>
          <RepoItem repo={repo}></RepoItem>
        </tbody>
      </table>
    </Router>
  )
})

it('renders without crashing', () => {
  expect(wrapper.find('.repo-item__description').length).toEqual(1)
})

it('should render link', () => {
  expect(wrapper.find('.repo-item__link').length).toEqual(1)
})

it('should render link text', () => {
  expect(wrapper.find('Link').text()).toEqual('React test')
})


