import {shallow} from 'enzyme'
import * as React from "react"
import Hello from './Hello'

describe("Hello",()=>{
    it('show recoret',()=>{
        const props ={
            compiler:'hahah',
            framework:'heheh'
        }

        const wrapper = shallow(<Hello {...props} />)
        expect(wrapper.html()).toMatch('hahah')
    })
})