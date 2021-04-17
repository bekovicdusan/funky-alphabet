import React from 'react';
import classes from './Home.module.scss';
import { withRouter } from 'react-router-dom';
import { Grid, Box } from '@material-ui/core';

const Home = () => {
    return (
        <>
            <Grid
                container
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Box component="h2" color="primary" className={classes.heading}>
                        Home Works!
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default withRouter(Home);