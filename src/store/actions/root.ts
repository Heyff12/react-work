import { createAction } from "redux-actions"

import { Root } from "../actionTypes"
import {root} from "../../typed/my.d"

// export const setPassword = (payload:IUser) => ({
//   type: Root.SET_PASSWORD,
//   payload,
// })

export const setPassword = createAction(
  Root.SET_PASSWORD,
  (payload: root) => payload
)