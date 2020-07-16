import React from "react";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()})


describe("Should Test <NavigationItems/>", ()=> {

    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<NavigationItems/>);
    })

    it("should render 2 <NavigationItem/> if not Authenticated",()=> {
        
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })

    it("Should render 3 <NavigationItem/> if Authenticated", ()=> {
        wrapper.setProps({isAuth:true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })
})