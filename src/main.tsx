import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import history from "./utils/history"


import Root from "./Root"
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter  history={history}>
            <Root />
        </ConnectedRouter>
    </Provider>, 
    document.getElementById("app")
);


