import HeaderContent from "./HeaderContent.json"
import React, { useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import styles from "./Header.module.scss";
import { useMediaQuery } from "@material-ui/core";
import { BREAK_POINT } from "../constants";

const Header : React.FC =() =>{
    const [showNavigationMenu, setShowNavigationMenu] = useState(false);

    const handleClickMenuIcon =()=>{
        setShowNavigationMenu(true);
    };
    const handleClickCloseIcon=()=>{
        setShowNavigationMenu(false);
    };
    
    const isMobileDevice = useMediaQuery(BREAK_POINT);

    return (
    <>
    <div className={styles.header}>
        <a className={styles.headerText} href="/">{HeaderContent.title}</a>
        {isMobileDevice ? 
        (
            <div></div>
        ) : (
            showNavigationMenu ? (
                < CloseIcon onClick={handleClickCloseIcon} />
                ):(
                < MenuIcon onClick ={handleClickMenuIcon}/>
                )
        )
        }

    </div>
    </>
    );
}

export default Header;