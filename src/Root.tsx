/** @format */

import * as React from 'react'
import TopBar from './pages/layout/topbar'
import Home from './pages/home'
import My from './pages/my'
import {Route, Switch} from 'react-router-dom'

class Root extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <TopBar />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/my" component={My} />
        </Switch>
      </>
    )
  }
}

export default Root
