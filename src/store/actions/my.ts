/** @format */

import {createAction} from 'redux-actions'

import {My} from '../actionTypes'
// import {Imy} from '../../typed/index'

export const setName = createAction(My.SET_NAME, (payload: Imy) => payload)
