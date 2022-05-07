import React, { useState, useEffect, useMemo } from 'react';
import Counter from '../Counter/Counter';
import classes from '../../App.module.css';
import counterClasses from '../Counter/Counter.module.css';
import { SubscriptionObject } from '../List/types';
import List from '../List/List';

interface ContainerProps {
  data: SubscriptionObject[];
}

const Container: React.FC<ContainerProps> = ({
  data,
}: ContainerProps): JSX.Element => {
  const [sum, setSum] = useState(0);

  const amount = useMemo(
    (): number => data.reduce((acc, item) => acc + item.amount, 0),
    [data]
  );

  useEffect(() => {
    setSum(amount);
  }, [data, amount]);

  return (
    <div className={classes.container}>
      <div className={counterClasses.counter__row}>
        <Counter count={data.length} text="Active Subcriptions" />
        <Counter count={sum} text="Monthly" sum />
      </div>
      <List subscriptions={data} />
    </div>
  );
};

export default Container;
