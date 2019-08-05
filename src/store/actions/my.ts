import { createAction } from "redux-actions"

import { My } from "../actionTypes"
import { Imy } from "../../typed/my.d";

export const setName = createAction(
  My.SET_NAME,
  (payload: Imy) => payload
)