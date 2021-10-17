import FooterContent from "./FooterContent.json"
import React from "react";
import styles from "./Footer.module.scss"

const Footer : React.FC =() =>{
    return <>
    <div className={styles.footer}>{FooterContent.reserved}</div>
    </>;
}

export default Footer;