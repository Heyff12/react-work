/** @format */

import * as React from 'react'
import {connect} from 'react-redux'
import {List, Switch} from 'antd-mobile'

import {Hello} from '../../components/Hello'
import {setName} from '../../store/actions/my'
import {setPassword} from '../../store/actions/root'
import RoutePrompt from '../../components/routePrompt'

import {IRedux, Imy, Iroot} from '../../typed/index'

const styles = require('./index.less')

const mapStateToProps = (state: IRedux.IRoot) => {
  console.log('----------home--------------mapStateToProps-------------')
  console.log(state)
  console.log(state.root.getIn(['userInfo', 'password']))
  return {
    name: state.my.getIn(['name']),
    password: state.root.getIn(['userInfo', 'password']),
  }
}

const mapDispatchToProps = dispatch => ({
  setName: (payload: Imy) => () => dispatch(setName(payload)),
  setPassword: (payload: Iroot) => () => dispatch(setPassword(payload)),
})

interface IProps {
  name: string
  password: string
  setName: () => () => void
  setPassword: () => () => void
}

interface IState {
  checked: boolean
}

class Home extends React.Component<IProps, IState> {
  public state: IState = {
    checked: true,
  }

  public render() {
    console.log('----render------')

    return (
      <>
        <div
          dangerouslySetInnerHTML={{
            __html: '测试文本，lilnong'.replace(/(测试文本)/g, '<i>$1</i>'),
          }}
        />
        <Hello compiler="TypeScript" framework="React" />
        <h1 className={styles.h1}>
          Hello,world!第一次commit提交forCI---second--push--trigger---third-push-trigger-bwg
          Github Actons Deploy
          <br />
          docker nignx
          <br />
          new path
        </h1>
        <h2 className={styles.h2}>name:{this.props.name}</h2>
        <button onClick={this.props.setName({name: 'newNameHAha'})}>
          设置name
        </button>
        <h2>password:{this.props.password}</h2>
        <button onClick={this.props.setPassword({password: '666666'})}>
          设置password
        </button>
        <List renderHeader={() => 'Form switch'}>
          <List.Item
            extra={
              <Switch
                checked={this.state.checked}
                onChange={() => {
                  this.setState({
                    checked: !this.state.checked,
                  })
                }}
              />
            }>
            Off
          </List.Item>
        </List>
        <RoutePrompt />
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
