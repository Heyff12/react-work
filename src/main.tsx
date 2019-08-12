/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import 'lib-flexible'
const FastClick = require('fastclick') // 解决300ms延迟

import history from './utils/history'
import Root from './Root'
import store from './store'

window.FastClick = FastClick

import './styles/app.less'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
)
