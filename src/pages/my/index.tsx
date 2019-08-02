import * as React from "react";
import { connect } from 'react-redux'
import {setName} from '../../store/actions/my'
import {IRedux,my} from '../../typed/my.d'

const mapStateToProps = (state: IRedux.IMy) => {
  console.log('-----mapStateToProps----')
  console.log(state)
  return {
    name: state.my.getIn(['name']),
    // name: state.my.name,
  }
}

const mapDispatchToProps = (dispatch) => (
  {
  setName: (payload:my) => dispatch(setName(payload))
})

// type DispatchProps = typeof mapDispatchToProps

type Props = {
  name: string
  setName: () => void
} 

class My extends React.Component<Props, {}> {

  componentDidMount(){
    console.log('componentDidMount')
    console.log(this.props.name)
  }

  render() {
    return (
      <>
        <h1>个人主页!</h1>
        <p>ip更换后测试</p>
        <p>ip更换后测试--第二次</p>
        <p>ip更换后测试--第san次aliyun2222--hook--ali</p>
        <p>ip更换后测试--jenkins ipd</p>
        <h2>name:{this.props.name}</h2>
        <button onClick={()=>this.props.setName({name:'newSecondNameHAha'})}>设置name</button>
      </>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(My);