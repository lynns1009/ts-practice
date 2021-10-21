import React from "react";
import { Container } from '@material-ui/core';
import styles from './ProfileContainer.module.scss';

const ProfileContainer :React.FC =()=>{
    return (
            <Container className={styles.profile}>
                <div >this is a test</div>
            </Container>
    );
};

export default ProfileContainer;