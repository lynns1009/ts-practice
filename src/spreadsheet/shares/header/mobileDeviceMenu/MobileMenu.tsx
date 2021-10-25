import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import React, { FC, useState } from "react";
import { SideMenuItems } from '../../constants';
import styles from "./MobileMenu.module.scss"

const MobileMenu: React.FC = () => {
    const [showNavigationMenu, setShowNavigationMenu] = useState<boolean>(false);
    return (
        showNavigationMenu ? (
            <>
                <CloseIcon onClick={() => setShowNavigationMenu(!showNavigationMenu)} />
                <Drawer className={styles.drawer}
                    BackdropProps={{ className: styles.drawer }}
                    classes={{
                        paper: styles.drawerPaper
                    }}
                    anchor="top"
                    open={showNavigationMenu}
                    onClose={() => setShowNavigationMenu(false)}
                >
                    <ul className={styles.menuBlock}>
                        {SideMenuItems.map((item, index) => (
                            <li className={styles.menuItem}
                                key={index}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </Drawer>
            </>
        ) : (
            <MenuIcon onClick={() => setShowNavigationMenu(!showNavigationMenu)} />
        )
    )
}

export default MobileMenu;
