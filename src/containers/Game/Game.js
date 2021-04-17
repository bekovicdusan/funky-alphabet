import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Box } from '@material-ui/core';
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
    // const [canSubmit, setCanSubmit] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [delay, setDelay] = useState(3500);

    useMount(() => {
        const randomizedArrayClone = [...randomizedArray]
        const randomizedArrayDefault = randomizedArrayClone.sort(() => Math.random() - 0.5);
        setRandomizedArray(randomizedArrayDefault);
    })

    useInterval(() => {
            setInputValue("");
            setDisabled(false);
            setCounter(counter + 1);
            setCurrentNumber(showNumbers(counter));
    }, 3000);

    useUpdate(() => {
        let answer = checkAnswer();
        if (answer) {

        } else {

        }
        

        console.log('answer is ' + checkAnswer());
    }, [inputValue, disabled]);



    useUpdate(() => {

        resetGame();

    }, [randomizedArray])

    useUpdate(() => {
        if (counter === 27) finishGame();
    }, [counter])

    const checkAnswer = useCallback(() => {
        if (inputValue !== "") setDisabled(true);

        const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        
        let result = false;
        alphabet.forEach((letter, i) => {
            if (inputValue.toUpperCase() === letter) {
                if (inputValue.toUpperCase() === alphabet[currentNumber - 1]) result = true; 
            }
        });
        return result

    }, [inputValue]);

    const resetGame = useCallback(() => {
        console.log(randomizedArray + "from reset game");
    },[randomizedArray])


    const showNumbers = useCallback(() => {
        console.log(randomizedArray[counter] + " " + counter);
        return randomizedArray[counter]
    },[randomizedArray, counter]);

    const finishGame = () => {
        console.log('works');
    }

    const handleClick = () => {
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
                        <Letters/>
                    </Grid>
                </Grid>
                <Score/>
            </Grid>
        </>
    )
}


export default withRouter(Game);