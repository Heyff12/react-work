/** @format */

import {createAction} from 'redux-actions'

import {Root} from '../actionTypes'
import {Iroot} from '../../typed/index'

export const setPassword = createAction(
  Root.SET_PASSWORD,
  (payload: Iroot) => payload,
)
