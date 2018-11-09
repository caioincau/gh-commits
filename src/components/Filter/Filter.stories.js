import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Filter from './Filter';
import 'materialize-css/dist/css/materialize.css'


storiesOf('Filter', module)
  .addDecorator(withInfo())
  .add('Empty Filter', () => <Filter name="filter" ></Filter>)
