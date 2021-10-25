import React from "react";
import { Grid } from '@mui/material';
import styles from './ProfileContainer.module.scss';

const ProfileContainer: React.FC = () => {
    return (
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={styles.profile}
        >
            <Grid item xs={11} md={11}>
                Hello world
            </Grid>
        </Grid>
    );
};

export default ProfileContainer;