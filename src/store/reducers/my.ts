import { handleActions, ReducerMap } from "redux-actions";
import { Map, List, fromJS } from "immutable";

import { My } from "../actionTypes";
import { IRedux,my } from "../../typed/my.d";

const myState: IRedux.IMy = Map({
  name: "haha"
});

// const my = (state = myState, action) => {
//   switch (action.type) {
//     case My.SET_NAME:
//       return action.name;
//     default:
//       return state;
//   }
// };

// export default my;

const actionHandle: ReducerMap<IRedux.IMy, any> = {
  [My.SET_NAME]: (
    state: IRedux.IMy,
    action: ReduxActions.Action<my>
  ) => {
    return state.set("name", fromJS(action.payload.name))
  },
};


export default handleActions(actionHandle, myState)
