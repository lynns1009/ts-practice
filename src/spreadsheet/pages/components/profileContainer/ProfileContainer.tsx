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
            <Grid item xs={10} md={10}>
                <Grid item xs={5} md={5} height={300}> </Grid>
            </Grid>
        </Grid>
    );
};

export default ProfileContainer;