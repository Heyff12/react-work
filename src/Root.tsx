/** @format */

import * as React from 'react'
import TopBar from './pages/layout/topbar/index'
import Home from './pages/home/index'
import My from './pages/my/index'
import UploadTest from './pages/upload/index'
import Markdown from './pages/markdown/index'
import MyAnimate from './pages/animate/index'
import {Route, Switch} from 'react-router-dom'

class Root extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <TopBar />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/my" component={My} />
          <Route path="/upload" component={UploadTest} />
          <Route path="/markdown" component={Markdown} />
          <Route path="/myAnimate" component={MyAnimate} />
        </Switch>
      </>
    )
  }
}

export default Root
