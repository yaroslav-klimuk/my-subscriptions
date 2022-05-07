import React from 'react';
import classes from './Counter.module.css';

interface CounterProps {
  count: number;
  text: string;
  sum?: boolean;
}

const Counter = ({ count, text, sum }: CounterProps) => (
  <div className={classes.counter__wrapper}>
    <span className={classes.count}>{sum ? `$${count}` : count}</span>
    <span className={classes.counter__title}>{text}</span>
  </div>
);

Counter.defaultProps = {
  sum: false,
};
export default Counter;
