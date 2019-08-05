import { Map, fromJS } from "immutable";


export interface Iroot {
    userInfo: {
        password: string
    }
}

export interface Imy {
    name: string;
}

// interface IRedux {
//   my: IMy;
//   root: IRoot;
// }

export declare namespace IRedux {

    interface IRoot extends Map<string, any> {
        toJS(): Iroot
    }

    interface IMy extends Map<string, any> {
        toJS(): Imy
    }

    // interface IMy {
    //     name: string;
    // }

}
