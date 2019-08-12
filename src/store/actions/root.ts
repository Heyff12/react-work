/** @format */

import {createAction} from 'redux-actions'

import {Root} from '../actionTypes'
import {Iroot} from '../../typed/my.d'

export const setPassword = createAction(
  Root.SET_PASSWORD,
  (payload: Iroot) => payload,
)
