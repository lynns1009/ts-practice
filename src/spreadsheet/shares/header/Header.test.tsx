import { render } from "@testing-library/react";
import React from "react";
import Header from "./Header";
import HeaderContext from "./HeaderContent.json";

describe('the first test practice',()=>{
    it('should render Header text correct',()=>{
        const {getByText} = render(<Header />)
        expect(getByText(HeaderContext.title)).toBeInTheDocument();
    })
});