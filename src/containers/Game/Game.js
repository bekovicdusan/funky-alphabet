import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Box, RadioGroup, Radio, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';
import classes from './Game.module.scss';
import Button from '@material-ui/core/Button';

import Letters from '../../components/Letters';
import Score from '../../components/Score';

import { useMount, useUpdate, useInterval } from '../../hooks';


const Game = () => {
    const [btnText, setBtnText] = useState("Start Game");
    const [inputValue, setInputValue] = useState("");
    const [randomizedArray, setRandomizedArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
    const [counter, setCounter] = useState(0);
    const [currentNumber, setCurrentNumber] = useState();
    // const [disabled, setDisabled] = useState(false);  *readonlyIssues
    const [hit, setHit] = useState(0);
    const [miss, setMiss] = useState(0);
    const [left, setLeft] = useState(26);
    const [colorize, setColorize] = useState();
    const [radio, setRadio] = useState("2");
    const [delay, setDelay] = useState(3500);
    const [specificLetterKey, setSpecificLetterKey] = useState(); //implementation of coloring each letter depending on answer not finished due to insuficcient time
    const success = "secondary.success"; //implementation of coloring each letter depending on answer not finished due to insuficcient time
    const missed = "secondary.warning";  //implementation of coloring each letter depending on answer not finished due to insuficcient time

    useMount(() => {
        const randomizedArrayClone = [...randomizedArray]
        const randomizedArrayDefault = randomizedArrayClone.sort(() => Math.random() - 0.5);
        setRandomizedArray(randomizedArrayDefault);
    })

    useInterval(() => {
        if (counter > 0 && inputValue === "") setMiss(miss + 1);
        setInputValue("");
        // setDisabled(false); *readonlyIssues
        if (left > 0) setLeft(left - 1);
        setCounter(counter + 1);
        setCurrentNumber(showNumbers(counter));
    }, delay);

    useUpdate(() => {
        let answer = checkAnswer();
        if (answer) {

        } else {

        }


        console.log('answer is ' + checkAnswer());
    }, [inputValue]);

    useUpdate(() => {
        if (counter === 27) finishGame();
    }, [counter])

    const checkAnswer = useCallback(() => {
        const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        
        let result = false;
        alphabet.forEach((letter, i) => {
            if (inputValue.toUpperCase() === letter) {
                if (inputValue.toUpperCase() === alphabet[currentNumber - 1]) result = true;
            }
        });

        if (result) {
            setHit(hit + 1);
            setColorize(success);
        } else {
            if (counter !== 0) setMiss(miss + 1);
            setColorize(missed);
        }

        return result

    }, [inputValue]);


    const showNumbers = useCallback(() => {
        console.log(randomizedArray[counter] + " " + counter);
        return randomizedArray[counter]
    }, [randomizedArray, counter]);

    const finishGame = () => {
        console.log('works');
    }

    const handleClick = () => {
        if (btnText === "Start Game") {
            setBtnText("Stop")
        } else {
            setBtnText("Start Game")
        }

        if (btnText === "Stop") {
            resetGame();
        }
    }

    const resetGame = () => {
        setLeft(26);
        setMiss(0);
        setCounter(0);
        setHit(0);

        const randomizedArrayClone = [...randomizedArray]
        const randomizedArrayDefault = randomizedArrayClone.sort(() => Math.random() - 0.5);
        setRandomizedArray(randomizedArrayDefault);
    }

    const handleChange = (event) => {
        setRadio(event.target.value);

        if (radio === 1) {
            setDelay(5000);
        } else if (radio === 2) {
            setDelay(3500)
        } else if (radio === 3) {
            setDelay(2000)
        }
    }

    return (
        <>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Choose Difficulty</FormLabel>
                        <RadioGroup className={classes.radioDiv} aria-label="gender" name="gender1" value={radio} onChange={handleChange}>
                            <FormControlLabel value="1" control={<Radio />} label="Easy" />
                            <FormControlLabel value="2" control={<Radio />} label="Medium"/>
                            <FormControlLabel value="3" control={<Radio />} label="Hard" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        className={classes.gameButton}
                        onClick={() => handleClick()}
                    >
                        {btnText}
                    </Button>
                </Grid>
                <Grid item>
                    <Box component="h1">
                        {currentNumber}
                    </Box>
                </Grid>
                <Grid item>
                    <input value={inputValue} type="text" maxLength="1" onChange={(e) => setInputValue(e.target.value)} className={classes.inputField} />
                </Grid>
                <Grid item>
                    <Grid container className={classes.letterContainer}>
                        <Letters color={colorize} key={specificLetterKey} />
                    </Grid>
                </Grid>
                <Score
                    hit={hit}
                    miss={miss}
                    left={left}
                />
            </Grid>
        </>
    )
}


export default withRouter(Game);