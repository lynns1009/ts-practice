import HeaderContent from "./HeaderContent.json"
import React from "react";

const Header : React.FC =() =>{
    return <>
    <div>{HeaderContent.title}</div>
    </>;
}

export default Header;