import React from 'react';
import ListItem from './ListItem';
import classes from './List.module.css';
import { SubscriptionObject } from './types';
import Button from '../Button/Button';

const arr: SubscriptionObject[] = [
  {
    name: 'Netflix',
    amount: 12,
  },
  {
    name: 'AppleMusic',
    amount: 6,
  },
];

const List: React.FC = (): JSX.Element => (
  <div className={classes.list__container}>
    <div className={classes.list__body}>
      {arr.map(({ name, amount }) => (
        <ListItem name={name} amount={amount} />
      ))}
    </div>

    <div className={classes.list__footer}>
      <Button text="Add new" />
    </div>
  </div>
);
export default List;
