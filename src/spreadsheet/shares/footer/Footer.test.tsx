import { render } from "@testing-library/react";
import React from "react";
import Footer from "./Footer";
import FooterContent from "./FooterContent.json";

describe('the first test practice',()=>{
    it('should render Header text correct',()=>{
        const {getByText} = render(<Footer />)
        expect(getByText(FooterContent.reserved)).toBeInTheDocument();
    })
});