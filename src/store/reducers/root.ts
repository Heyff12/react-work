/** @format */

import {handleActions, ReducerMap} from 'redux-actions'
import {Map, fromJS} from 'immutable'
import {IRedux, Iroot} from '../../typed/index'

import {Root} from '../actionTypes'

const myRoot: IRedux.IRoot = Map({
  userInfo: Map({
    password: '123445',
  }),
})

const actionHandle: ReducerMap<IRedux.IRoot, any> = {
  [Root.SET_PASSWORD]: (
    state: IRedux.IRoot,
    action: ReduxActions.Action<Iroot>,
  ) => {
    return state.setIn(
      ['userInfo', 'password'],
      fromJS(action.payload.password),
    )
  },
}

export default handleActions(actionHandle, myRoot)
