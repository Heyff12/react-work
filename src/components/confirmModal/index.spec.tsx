/** @format */

import * as React from 'react'
import {mount} from 'enzyme'

import ConfirmModal from './index'

describe('ConfirmModal', () => {
  it('show recorrect', () => {
    const mockConfirmFunc = jest.fn()
    const mockCloseFunc = jest.fn()

    const props = {
      showModal: true,
      onCancleHandle: mockCloseFunc,
      onConfirmHandle: mockConfirmFunc,
      message: 'hahahahaah',
    }

    const wrapper = mount(<ConfirmModal {...props} />)
    expect(wrapper.html()).toMatch('hahahahaah')

    wrapper
      .find('.am-modal-button')
      .at(0)
      .simulate('click')
    expect(mockCloseFunc).toBeCalled()

    wrapper
      .find('.am-modal-button')
      .at(1)
      .simulate('click')
    expect(mockConfirmFunc).toBeCalled()
  })
})
