import React from 'react';
import classes from './App.module.css';
import Container from './components/Container/Container';
import { SubscriptionObject } from './components/List/types';

const subscriptionsArray: SubscriptionObject[] = [
  {
    name: 'netflix',
    amount: 12,
  },
  {
    name: 'appleMusic',
    amount: 6,
  },
];

const App = () => (
  <div className={classes.wrapper}>
    <h1 className={classes.title}>My subcriptions</h1>
    <Container data={subscriptionsArray} />
  </div>
);

export default App;
