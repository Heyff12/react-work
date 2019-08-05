import { handleActions, ReducerMap } from "redux-actions";
import { Map, fromJS } from "immutable";

import { My } from "../actionTypes";
import { IRedux,Imy } from "../../typed/my.d";

const myState: IRedux.IMy = Map({
  name: "haha"
});

const actionHandle: ReducerMap<IRedux.IMy, any> = {
  [My.SET_NAME]: (
    state: IRedux.IMy,
    action: ReduxActions.Action<Imy>
  ) => {
    return state.set("name", fromJS(action.payload.name))
  },
};


export default handleActions(actionHandle, myState)
