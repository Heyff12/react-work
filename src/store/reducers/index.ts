import * as Immutable from "immutable"
import { combineReducers } from "redux"
// import { combineReducers } from 'redux-immutable'

import { connectRouter } from "connected-react-router"
// import { ConnectedRouter } from "connected-react-router/immutable";

import my from "./my"
import root from "./root"

// let initState = Immutable.fromJS({ location: undefined })

export default (history) => combineReducers({
  my,
  root,
  router: connectRouter(history)
})
