import React from "react";
import styles from "./Header.module.scss";
import MobileMenu from "./mobileDeviceMenu/MobileMenu"

const Header : React.FC =() =>{
    return (
    <>
    <div className={styles.header}>
            <div className={styles.mobileDevice}>
                <MobileMenu />
            </div>
         <div></div>
    </div>
    </>
    );
}

export default Header;