import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import './App.css';

const bets = [
  {
    name: 'Wentzer',
    current: 112,
    target: 255.5
  },
  {
    name: 'Scotty-B',
    current: 62,
    target: 64.5
  },
  {
    name: 'Cooper',
    current: 0,
    target: 64.5
  },
  {
    name: 'Fumbles',
    current: 2,
    target: 1.5
  },
  {
    name: 'Sacks',
    current: 5,
    target: 5.5
  },
  {
    name: '2nd Half Points',
    current: 11,
    target: 21.5
  },
]

const useStyles = makeStyles({
  root: {
    backgroundColor: '#118843',
    height:'100vh'
  },
  title: {
    fontSize: '3rem',
    lineHeight: '4rem'
  }
});

function App() {
  const classes = useStyles();

  return (
      <Container className={classes.root} fluid>
          <Container className={classes.root} maxWidth="sm">
            <Box pt={5} >
                <Typography className={classes.title} align="center" component="h1" variant="heading">
                  Da Boiz Bet Checker
                </Typography>
            </Box>
            <Box p={3}>
              <Typography component="h2" variant="heading">
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  Bet
                </Grid>
                <Grid item xs={3}>
                  Current
                </Grid>
                <Grid item xs={3}>
                  Goal
                </Grid>
              </Grid>
              </Typography>
              {bets.map((bet,index) => {
                return (
                  <Grid container spacing={5}>
                  <Grid item xs={6}>
                    {bet.name}
                  </Grid>
                  <Grid item xs={3}>
                    {bet.current}
                  </Grid>
                  <Grid item xs={3}>
                    {bet.target}
                  </Grid>
                </Grid>
                )
              })}
            </Box>
        </Container>
      </Container>
  );
}

export default App;
