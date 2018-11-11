import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import FailurePage from './FailurePage'
import 'materialize-css/dist/css/materialize.css'

storiesOf('FailurePage', module)
  .addDecorator(withInfo())
  .add('Default error page', () => <FailurePage></FailurePage>)
