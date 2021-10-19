import { render } from "@testing-library/react";
import React from "react";
import WelcomePage from "./WelcomePage";

describe('the first test practice',()=>{
    it('should render text correct',()=>{
        const {getByText} = render(<WelcomePage />)
        expect(getByText('This is a test')).toBeInTheDocument();
    })
});
