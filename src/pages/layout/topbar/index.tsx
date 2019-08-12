/** @format */

import * as React from 'react'
// import {NavLink, withRouter} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import history from '@/utils/history'

class TopBar extends React.Component<{}, {}> {
  public goToOverview = () => {
    history.push('/overview')
  }
  public render() {
    return (
      <div>
        <div className="container">
          <div>
            <div onClick={this.goToOverview} />
            <div>
              <ul>
                <li>
                  <NavLink to="/">home</NavLink>
                </li>
                <li>
                  <NavLink to="/my">MY</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TopBar
