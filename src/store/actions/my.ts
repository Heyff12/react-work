import { createAction } from "redux-actions"

import { My } from "../actionTypes"
import { my } from "../../typed/my.d";

// export const setName = (name:string) => ({
//   type: My.SET_NAME,
//   name: name,
// })

export const setName = createAction(
  My.SET_NAME,
  (payload: my) => payload
)