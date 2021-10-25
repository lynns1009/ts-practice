import { render } from "@testing-library/react";
import React, { useState as useStateMock } from "react";
import MobileMenu from "./MobileMenu";
import { shallow } from 'enzyme';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

describe('should render mobile menu correctly', () => {
    const wrapper = shallow(<MobileMenu />);

    it('shoule find menu icon', () => {
        expect(wrapper.find(MenuIcon)).toBeTruthy();
    })

    it('shoule find close icon', () => {
        expect(wrapper.find(CloseIcon)).toBeTruthy();
    })
})