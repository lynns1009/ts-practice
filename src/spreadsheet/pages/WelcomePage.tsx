import React from 'react';
import ProfileImageBlocker from "./components/profileImageBlocker/ProfileImageBlocker";
import ProfileContainer from './components/profileContainer/ProfileContainer';
import styles from './WelcomePage.module.scss';


const WelcomePage: React.FC = (props) => {
    return <>
        <div className={styles.welcomePage}>
            <ProfileImageBlocker />
            <ProfileContainer />
        </div>
    </>;
};

export default WelcomePage
