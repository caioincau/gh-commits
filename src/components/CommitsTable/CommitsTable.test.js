import React from 'react';
import CommitsTable from './CommitsTable';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


const commits =
  [{
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

let wrapper = {}


let mountComponent = () => {
  return Enzyme.mount(
    <CommitsTable commits={commits}></CommitsTable>
  );
}

beforeEach(() => {
  wrapper = mountComponent()
});

it('renders without crashing', () => {
  expect(wrapper.find('.commits-table .commit-item').length).toEqual(2);
});


