import { Map, fromJS } from "immutable";


export interface root {
    userInfo: {
        password: string
    }
}

export interface my {
    name: string;
}

// interface IRedux {
//   my: IMy;
//   root: IRoot;
// }

export declare namespace IRedux {

    interface IRoot extends Map<string, any> {
        toJS(): root
    }

    interface IMy extends Map<string, any> {
        toJS(): my
    }

    // interface IMy {
    //     name: string;
    // }

}
