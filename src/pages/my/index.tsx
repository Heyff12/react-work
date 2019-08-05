import * as React from "react";
import { connect } from "react-redux"
import { Picker, List } from "antd-mobile";
import {setName} from "../../store/actions/my"
import {IRedux,my} from "../../typed/my.d"

const mapStateToProps = (state: IRedux.IMy) => {
  return {
    name: state.my.getIn(["name"]),
  }
}

const mapDispatchToProps = (dispatch) => (
  {
  setName: (payload:my) => dispatch(setName(payload))
})

// type DispatchProps = typeof mapDispatchToProps

interface Props {
  name: string
  setName: () => void
} 

const district = 
  [
    {
      label: "2013",
      value: "2013",
    },
    {
      label: "2014",
      value: "2014",
    },
    {
      label: "春",
      value: "春",
    },
    {
      label: "夏",
      value: "夏",
    },
  ]


class My extends React.Component<Props, {}> {

  public componentDidMount(){
    console.log("componentDidMount")
    console.log(this.props.name)
  }

  public render() {
    return (
      <>
        <h1>个人主页!</h1>
        <p>ip更换后测试</p>
        <p>ip更换后测试--第二次</p>
        <p>ip更换后测试--第san次aliyun2222--hook--ali</p>
        <p>ip更换后测试--jenkins ipd</p>
        <h2>name:{this.props.name}</h2>
        <button onClick={()=>this.props.setName({name:"newSecondNameHAha"})}>设置name</button>
        <Picker data={district} cols={1}  className="forss">
          <List.Item arrow="horizontal">Single</List.Item>
        </Picker>
      </>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(My);