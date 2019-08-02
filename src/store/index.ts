import { applyMiddleware, createStore, compose } from "redux";

import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./reducers";
import history from "../utils/history";

let store;
if (process.env.NODE_ENV === "development") {
    const composeEnhancers =
        typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : compose;

    const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(history)));
    store = createStore(createRootReducer(history), {}, enhancer);
} else {
    store = createStore(
        createRootReducer(history),
        {},
        compose(applyMiddleware(routerMiddleware(history)))
    );
}
export default store;
