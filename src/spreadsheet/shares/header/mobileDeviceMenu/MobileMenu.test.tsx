import React, { useState as useStateMock } from "react";
import MobileMenu from "./MobileMenu";
import { shallow, ShallowWrapper } from 'enzyme';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

describe('should render mobile menu correctly', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<MobileMenu />);
    });

    it('should switch to close icon if user click on menu icon', () => {
        const menuIcon = wrapper.find(MenuIcon);

        menuIcon.simulate('click');

        expect(wrapper.find(CloseIcon)).toHaveLength(1);
        expect(wrapper.find(MenuIcon)).toHaveLength(0);
    });

    it('should have menu Icon visible', () => {
        const menuIcon = wrapper.find(MenuIcon);

        expect(menuIcon).toHaveLength(1);
    });

    it('should have close Icon visible', () => {
        const setState = jest.fn();
        jest
            .spyOn(React, 'useState')
            .mockImplementationOnce(() => [false, setState]);

        const closeIcon = wrapper.find(CloseIcon);

        expect(closeIcon).toHaveLength(1);
    });
});