import { applyMiddleware, createStore, compose } from "redux"

import { routerMiddleware } from "connected-react-router"
import { Map } from "immutable"

import createRootReducer from "./reducers"

import history from "../utils/history"

const initStore = Map()
// {
//   my:Map(),
//   root:Map(),
//   router:Map(),
// }
let store
if (process.env.NODE_ENV === "development") {
  const composeEnhancers =
    typeof window === "object" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

  const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(history)))
  store = createStore(createRootReducer(history), {}, enhancer)
} else {
  store = createStore(
    createRootReducer(history),
    {},
    compose(applyMiddleware(routerMiddleware(history)))
  )
}
export default store
