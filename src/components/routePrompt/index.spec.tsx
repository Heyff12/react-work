/** @format */

import * as React from 'react'
import {shallow} from 'enzyme'
import {Prompt} from 'react-router'

import RoutePrompt from './index'
import ConfirmModal from '../confirmModal/index'

describe('RoutePrompt', () => {
  it('show recorrect', () => {
    const wrapper = shallow(<RoutePrompt />)
    wrapper.setState({
      showModal: true,
    })
    expect(wrapper.find(ConfirmModal)).toBeTruthy()
    expect(wrapper.find(Prompt)).toBeTruthy()

    const promptResult = wrapper.find(Prompt).prop('message')({
      pathname: '/hahah',
    })
    expect(wrapper.state('location')).toEqual({pathname: '/hahah'})
    expect(wrapper.state('showModal')).toBeTruthy()
    expect(promptResult).toBeFalsy()

    wrapper.find(ConfirmModal).prop('onCancleHandle')()
    expect(wrapper.state('showModal')).toBeFalsy()

    wrapper.find(ConfirmModal).prop('onConfirmHandle')()
    expect(wrapper.state('showModal')).toBeFalsy()
    expect(wrapper.instance().isLeave).toBeTruthy()

    const promptResult1 = wrapper.find(Prompt).prop('message')({
      pathname: '/hahah',
    })
    expect(promptResult1).toBeTruthy()
  })
})
