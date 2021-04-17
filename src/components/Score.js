import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { red, green, purple } from '@material-ui/colors';


import myClasses from './Component.module.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        padding: theme.spacing(2),
    },
}));


const Navbar = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid item>
                <Box component="span" className={classes.root}>
                    Score
                </Box>
            </Grid>
            <Grid item>
                <Box component="span" className={classes.root}>
                    Hit: 
                </Box>
            </Grid>
            <Grid item>
                <Box component="span" className={classes.root}>
                    Miss:
                </Box>
            </Grid>
            <Grid item>
                <Box component="span" className={classes.root}>
                    Left: 
                </Box>
            </Grid>
        </Grid>
    )
}

export default Navbar;