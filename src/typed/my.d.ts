/** @format */

import {Map} from 'immutable'

export interface Iroot {
    userInfo: {
        password: string
    }
}

export interface Imy {
    name: string
}

// interface IRedux {
//   my: IMy;
//   root: IRoot;
// }

declare namespace IRedux {
    interface IRoot extends Map<string, any> {
        toJS(): Iroot

        get<K extends keyof Iroot>(key: K): Iroot[K]

        set<K extends keyof Iroot>(
            key: K,
            value: Iroot[K],
        ): this & Readonly<Iroot>
    }

    interface IMy extends Map<string, any> {
        toJS(): Imy
    }

    // interface IMy {
    //     name: string;
    // }
}
