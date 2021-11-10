import React, { useState as useStateMock } from "react";
import MobileMenu from "./MobileMenu";
import { shallow, ShallowWrapper } from 'enzyme';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';

describe('should render mobile menu correctly', () => {
    it('should render menu icon', () => {
        const wrapper = shallow(<MobileMenu />);

        expect(wrapper.find(CloseIcon)).toHaveLength(0);
        expect(wrapper.find(Drawer)).toHaveLength(0);
        expect(wrapper.find('.menuItem')).toHaveLength(0);
        expect(wrapper.find(MenuIcon)).toHaveLength(1);
    });

    it('should switch to close icon and show menu items if user click on menu icon', () => {
        const wrapper = shallow(<MobileMenu />);
        const menuIcon = wrapper.find(MenuIcon);

        menuIcon.simulate('click');

        expect(wrapper.find(CloseIcon)).toHaveLength(1);
        expect(wrapper.find(Drawer)).toHaveLength(1);
        expect(wrapper.find('.menuItem')).toHaveLength(2);
        expect(wrapper.find(MenuIcon)).toHaveLength(0);
    });
});