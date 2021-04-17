import React from 'react';
import { AppBar, Link, Toolbar, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import logo from '../images/logo.svg';
import myClasses from './Component.module.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        color: theme.palette.primary.accent,
        padding: theme.spacing(2),
    },
}));


const Navbar = () => {
    const classes = useStyles();
    return (
        <Box clone bgcolor="primary.light">
            <AppBar>
                <Toolbar>
                    <Grid 
                        container
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <Link href="/" className={classes.root}>
                                Home
                            </Link>
                            <Link href="/game" className={classes.root}>
                                Game
                            </Link>
                        </Grid>
                        <Grid item>
                            <img src={logo} className={myClasses.logo} alt="logo"/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;