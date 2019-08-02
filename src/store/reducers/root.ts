import { handleActions, ReducerMap } from "redux-actions";
import { Map, fromJS } from "immutable";
// import {set} from 'lodash'
import { IRedux, root } from "../../typed/my.d";

import { Root } from "../actionTypes";

const myRoot: IRedux.IRoot = Map({
  userInfo: Map({
    password: "123445"
  })
});

// const root = (state = myRoot, action) => {
//     switch (action.type) {
//       case Root.SET_PASSWORD:
//         // return {...state, userInfo:{...action.payload}}
//         // return set(state,['userInfo','password'],action.payload.password) //无法触发 再次render
//         return state.setIn(['userInfo','password'], fromJS(action.payload.password))

//       default:
//         return state
//     }
//   }

//   export default root

const actionHandle: ReducerMap<IRedux.IRoot, any> = {
  [Root.SET_PASSWORD]: (
    state: IRedux.IRoot,
    action: ReduxActions.Action<root>
  ) => {
    return state.setIn(
      ["userInfo", "password"],
      fromJS(action.payload.password)
    );
  }
};

export default handleActions(actionHandle, myRoot);
