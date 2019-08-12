/** @format */

import * as React from 'react'
import {Modal} from 'antd-mobile'

interface IProps {
  showModal: boolean
  message: string
  onCancleHandle?: () => {}
  onConfirmHandle?: () => {}
}

class ConfirmModal extends React.Component<IProps, {}> {
  public render() {
    const {showModal, onCancleHandle, onConfirmHandle, message} = this.props
    return (
      <>
        <Modal
          visible={showModal}
          maskClosable={false}
          transparent={true}
          className="myModal"
          footer={[
            {text: '取消', onPress: onCancleHandle},
            {text: '确定', onPress: onConfirmHandle},
          ]}
          onCancleHandle={this.onCloseModalHandle}
          onConfirmHandle={this.onConfirmModalHandle}>
          {message}
        </Modal>
      </>
    )
  }
}

export default ConfirmModal
