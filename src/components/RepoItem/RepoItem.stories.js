import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  BrowserRouter as Router,
} from 'react-router-dom'



import RepoItem from './RepoItem';
import 'materialize-css/dist/css/materialize.css'

const repo = {
  name: 'React test',
  description: 'A repository with react'
}

storiesOf('RepoItem', module)
.addDecorator(withInfo())
.addDecorator(story =>
  <Router><table className="commits-table striped responsive-table"><tbody>{story()}</tbody></table></Router>)
  .add('Simple RepoItem', () => <RepoItem repo={repo}></RepoItem>)
