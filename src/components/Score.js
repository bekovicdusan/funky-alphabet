import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        padding: theme.spacing(2),
    },
}));


const Navbar = ({ hit, miss, left }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid item>
                <Box component="span" className={classes.root}>
                    Score
                </Box>
            </Grid>
            <Grid item>
                <Box component="span" className={classes.root} color="secondary.success">
                    Hit: {hit}
                </Box>
            </Grid>
            <Grid item>
                <Box component="span" className={classes.root} color="secondary.warning">
                    Miss: {miss}
                </Box>
            </Grid>
            <Grid item>
                <Box component="span" className={classes.root} color="secondary.purple">
                    Left: {left}
                </Box>
            </Grid>
        </Grid>
    )
}

export default Navbar;