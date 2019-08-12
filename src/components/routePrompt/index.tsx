/** @format */

import * as React from 'react'
import {Prompt} from 'react-router'
import history from '../../utils/history'
import ConfirmModal from '../confirmModal'

interface IState {
  showModal: boolean
  location: string
}

class RoutePrompt extends React.Component<{}, IState> {
  public state: IState = {
    showModal: false,
    location: '',
  }

  public isLeave: boolean = false

  public promptHandle = (location: string) => {
    if ((this, this.isLeave)) {
      return true
    }
    this.setState({
      showModal: true,
      location,
    })
    return false
  }

  public onCloseModalHandle = () => {
    this.setState({
      showModal: false,
    })
  }

  public onConfirmModalHandle = () => {
    this.isLeave = true
    history.push({
      pathname: this.state.location.pathname,
    })
    this.setState({
      showModal: false,
    })
  }

  public render() {
    const {showModal} = this.state
    return (
      <>
        <Prompt when={true} message={this.promptHandle} />
        <ConfirmModal
          showModal={showModal}
          onCancleHandle={this.onCloseModalHandle}
          onConfirmHandle={this.onConfirmModalHandle}
          message="确定要离开吗？"
        />
      </>
    )
  }
}

export default RoutePrompt
