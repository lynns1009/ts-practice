import HeaderContent from "./HeaderContent.json"
import React from "react";
import styles from "./Header.module.scss"

const Header : React.FC =() =>{
    return <>
    <div className={styles.header}>
        <div>{HeaderContent.title}</div>
    </div>
    </>;
}

export default Header;