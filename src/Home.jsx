import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, List, ListItemText, TextField, Typography } from '@material-ui/core';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    intro: {
        marginTop: theme.spacing(4)
    },
    rules: {
        marginTop: theme.spacing(4)
    },
    cards: {
        marginTop: theme.spacing(2),
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        marginTop: theme.spacing(2)
    },
    form: {
        marginTop: theme.spacing(4)
    }
}));

const Home = () => {
    const classes = useStyles();
    const [num, setNum] = useState(0);

    const onChangeNum = (e) => {
        const num = e.target.value;
        setNum(parseInt(num))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let msg = '';
  if (num % 7 === 0 && num % 5 === 0 && num % 3 === 0) msg += 'FizzBuzzBosh!';
  if (num % 7 === 0 && num % 5 !== 0 && num % 3 === 0) msg += 'FizzBosh!';
  if (num % 7 === 0 && num % 5 === 0 && num % 3 !== 0) msg += 'BuzzBosh';
  if (num % 7 !== 0 && num % 5=== 0 && num % 3 === 0) msg += 'FizzBuzz';
  if (num % 7 !== 0 && num % 5 !== 0 && num % 3 === 0) msg += 'Fizz!';
  if (num % 7 !== 0 && num % 5 === 0 && num % 3 !== 0) msg +=' Buzz!';
  if (num % 7 === 0 && num % 5 !== 0 && num %3 !== 0) msg += 'Bosh!'
  if (num % 7 !== 0 && num % 5 !== 0 && num %3 !== 0) msg += 'None!'
return Swal.fire({
    title: msg
}).then(() => {
    window.location = "/";
})
    }

    return (
        <div className={classes.paper}>
        <Typography component="h4" variant="h4">Fizz Buzz Bosh Web App</Typography>
        <Typography className={classes.intro} component="h5" variant="h6">The aim of this application is to follow the simple fizz buzz algorithm and to return a special message depending on the number inputted by you</Typography>
        <Typography className={classes.rules}>Rules of the game</Typography>
        <Card className={classes.cards}>
        <List>
            <CardContent>
        <ListItemText>If the integer is a multiple of three, a large “Fizz!” should be displayed</ListItemText>
        </CardContent>
        <CardContent>
        <ListItemText>If the integer is a multiple of five, a large “Buzz!” should be displayed</ListItemText>
        </CardContent>
        <CardContent>
        <ListItemText>If the integer is a multiple of seven, a large “Bosh!” should be displayed</ListItemText>
        </CardContent>
        <CardContent>
        <ListItemText>If the integer is a multiple of two or more of the above, all relevant keywords should be displayed.</ListItemText>
        </CardContent>
        <CardContent>
        <ListItemText>If the integer is not a multiple of any of the above, “None!” should be displayed</ListItemText>
        </CardContent>
        </List>
        </Card>
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                type="number" 
                id="num"
                fullWidth
                label="Enter Number"
                name="num"
                autoFocus
                value={[num]}
                onChange={onChangeNum}
            />
            <button type="submit" className={classes.button}>Click here to return magic word</button>
        </form>
        </div>
    )
};

export default Home;