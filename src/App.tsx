import React from 'react';
import classes from './App.module.css';
import Container from './components/Container/Container';

const App = () => (
  <div className={classes.wrapper}>
    <h1 className={classes.title}>My subcriptions</h1>
    <Container />
  </div>
);

export default App;
