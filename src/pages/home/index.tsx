import * as React from "react";
import { connect } from 'react-redux'
import { List, Switch } from 'antd-mobile';

import { Hello } from "../../components/Hello";
import {setName} from '../../store/actions/my'
import {setPassword} from '../../store/actions/root'

import {get,set} from 'lodash'
import {IRedux,my,root} from '../../typed/my.d'

// import './index.less'
const styles = require("./index.less");


const mapStateToProps = (state: IRedux.IRoot) => {
  console.log('----------home--------------mapStateToProps-------------')
  console.log(state)
  console.log(state.root.getIn(['userInfo','password']))
  return {
    // name: state.my.name,
    name: state.my.getIn(['name']),
    // password: get(state,['root','userInfo','password'])
    password: state.root.getIn(['userInfo','password'])
  }
}

const mapDispatchToProps = (dispatch) => (
  {
  setName: (payload:my) => dispatch(setName(payload)),
  setPassword:(payload:root) => dispatch(setPassword(payload))
})

type Props = {
  name: string
  password: string
  setName: () => void
  setPassword: () => void
} 

type IState = {
  checked: boolean
}

class Home extends React.Component<Props, IState> {

  state:IState={
    checked:true
  }

  render() {
    // console.log(this.props.match)
    // console.log(this.props.location)
    // console.log(this.props.history)

    // const aaa = {
    //   b:{
    //     c:{
    //       d:'333333'
    //     }
    //   }
    // }

    // const d = get(aaa,['b','c','d'])
    // console.log('d---'+d)
    // set(aaa,['b','c','d'],'666666666')-----
    // console.log(aaa)

    // const ddd = {...aaa,b:{c:{d:'777777'}}}
    // console.log(ddd)
    // console.log(aaa)

    console.log('----render------')


    return (
      <>
        <Hello compiler="TypeScript" framework="React" />
        <h1 className={styles.h1}>Hello,world!第一次commit提交forCI---second--push--trigger---third-push-trigger-bwg</h1>
        <h2 className={styles.h2}>name:{this.props.name}</h2>
        <button onClick={()=>this.props.setName({name:'newNameHAha'})}>设置name</button>
        <h2>password:{this.props.password}</h2>
        <button onClick={()=>this.props.setPassword({password:'666666'})}>设置password</button>
        <List
          renderHeader={() => 'Form switch'}
        >
          <List.Item
            extra={<Switch
              checked={this.state.checked}
              onChange={() => {
                this.setState({
                  checked: !this.state.checked,
                });
              }}
            />}
          >Off</List.Item>
        </List>
      </>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
