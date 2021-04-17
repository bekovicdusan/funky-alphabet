import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import myClasses from './Component.module.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
}));

const Letters = () => {
    const [letters, setLetters] = useState(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
    const classes = useStyles();

    return (
        letters.map((letter, i) => { 
            return (<h1 key={i} style={{ fontSize: "18px", marginTop: "0px", marginBottom: "0px", cursor: "default" }} className={ classes.root }>{ letter } ({i+1})</h1>)
        })

    )
}

export default Letters;