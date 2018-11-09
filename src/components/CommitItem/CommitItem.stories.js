import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import CommitItem from './CommitItem';
import 'materialize-css/dist/css/materialize.css'

const commit = {
  sha: 'daijoijiodaijo41',
  commit: {
    message: 'A good commit',
  },
  author: {
    login: 'jack'
  }
 }

storiesOf('CommitItem', module)
  .addDecorator(withInfo())
  .addDecorator(story =>
    <table className="commits-table striped responsive-table"><tbody>{story()}</tbody></table>)
  .add('simple commit', () => <CommitItem commit={commit}> </CommitItem>)
