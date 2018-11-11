import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import CommitsTable from './CommitsTable'
import 'materialize-css/dist/css/materialize.css'
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

storiesOf('CommitsTable', module)
  .addDecorator(withInfo())
  .add('Table with two itens', () => <CommitsTable commits={commits}></CommitsTable>)
  .add('Empty table should be loading', () => <CommitsTable commits={[]}></CommitsTable>)
