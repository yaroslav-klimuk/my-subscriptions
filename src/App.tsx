import React from 'react';
import Counter from './components/Counter/Counter';
import classes from './App.module.css';
import counterClasses from './components/Counter/Counter.module.css';
import List from './components/List/List';

const App = () => (
  <div className={classes.wrapper}>
    <h1 className={classes.title}>My subcriptions</h1>
    <div className={classes.container}>
      <div className={counterClasses.counter__row}>
        <Counter count={2} text="Active Subcriptions" />
        <Counter count={20} text="Monthly" sum />
      </div>
      <List />
    </div>
  </div>
);

export default App;
