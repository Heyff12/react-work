/** @format */

import * as React from 'react'
import anime from 'animejs'
const styles = require('./index.less')

class MyAnimate extends React.Component<{}, {}> {
  public componentDidMount() {
    console.log('componentDidMount')
    var elements = document.querySelectorAll('.blue')

    anime({
      targets: elements,
      translateX: 270,
    })
    // var myAnimation = anime({
    //   targets: ['.blue', '.green'],
    //   translateX: '13rem',
    //   rotate: 180,
    //   borderRadius: 8,
    //   duration: 2000,
    //   loop: true
    // });
  }

  public render() {
    return (
      <>
        <h1>动画!https://www.animejs.cn/start/</h1>
        <article>
          <div className="blue"></div>
          <div className="green"></div>
        </article>
      </>
    )
  }
}

export default MyAnimate
