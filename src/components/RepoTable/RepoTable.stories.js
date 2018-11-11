import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import RepoTable from './RepoTable'
import 'materialize-css/dist/css/materialize.css'
const repos = [{
  id: 1,
  name: 'React test',
  description: 'A repository with react'
 },
 {
  id: 2,
  name: 'Vue test',
  description: 'A repository with Vue'
}]

storiesOf('RepoTable', module)
  .addDecorator(withInfo())
  .addDecorator(story =>
    <Router><table className="commits-table striped responsive-table"><tbody>{story()}</tbody></table></Router>)
  .add('Table with two itens', () => <RepoTable repos={repos}></RepoTable>)
  .add('Empty table should be loading', () => <RepoTable repos={[]}></RepoTable>)
