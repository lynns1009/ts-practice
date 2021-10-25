import { useMediaQuery } from "@mui/material";
import { render } from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe('header should render mobile correctly in desktop screen', () => {
    beforeAll(() => {
        (useMediaQuery as jest.Mock).mockReturnValue(true);
    })
    it('shoule show up menu icon', () => {
        const { getByRole, getByText, container } = render(<Header />);
        const mobileDeviceElements = container.getElementsByClassName('mobileDevice');
        expect(mobileDeviceElements.length).toBe(1);
        expect(mobileDeviceElements[0]).toBeVisible();
    });
})

describe('header should render mobile correctly in mobile device', () => {

    it('shoule show up menu icon', () => {
        const { getByRole, getByText, container } = render(<Header />);
        const mobileDeviceElements = container.getElementsByClassName('mobileDevice');
        expect(mobileDeviceElements.length).toBe(1);
        expect(mobileDeviceElements[0]).toBeVisible();
    });


})