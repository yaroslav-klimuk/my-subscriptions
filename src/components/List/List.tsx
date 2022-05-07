import React from 'react';
import ListItem from './ListItem';
import classes from './List.module.css';

const arr = [
  {
    name: 'Netflix',
    amount: 12,
  },
  {
    name: 'AppleMusic',
    amount: 6,
  },
];

const List = () => (
  <div className={classes.list__container}>
    <ListItem subscriptions={arr} />
  </div>
);
export default List;
