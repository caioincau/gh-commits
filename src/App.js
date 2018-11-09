import React, { Component } from 'react'
import { Provider } from 'react-redux'

import RepoList from './views/RepoList'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import store from './store/store'

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <ErrorBoundary>
            <div>
              <Route exact path="/" component={RepoList}/>
            </div>
          </ErrorBoundary>
        </Provider>
      </Router>
    );
  }
}

export default App;
