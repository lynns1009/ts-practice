import { render } from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe('header should render mobile correctly',()=>{

    it('shoule show up menu icon',()=>{
        const {getByRole,getByText,container} = render(<Header />);
        //expect(getByText('Home')).to();
        const mobileDeviceElements = container.getElementsByClassName('mobileDevice');
        expect(mobileDeviceElements.length).toBe(1);
        expect(mobileDeviceElements[0]).toBeVisible();
    })
})