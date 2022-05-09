/* eslint-disable import/no-cycle */
import React, { useState, createContext, useMemo, useEffect } from 'react';
import Counter from '../Counter/Counter';
import classes from '../../App.module.css';
import counterClasses from '../Counter/Counter.module.css';
import { SubscriptionObject } from '../List/types';
import List from '../List/List';

const data: SubscriptionObject[] = [
  {
    name: 'netflix',
    price: 12,
  },
  {
    name: 'appleMusic',
    price: 6,
  },
  {
    name: 'spotify',
    price: 5,
  },
];

interface IContext {
  activeSubscriptions: SubscriptionObject[];
  setActiveSubscriptions: React.Dispatch<React.SetStateAction<never[]>>;
}

export const Context = createContext<IContext | Record<string, any>>({});

const Container = (): JSX.Element => {
  const [sum, setSum] = useState(0);
  const [activeSubscriptions, setActiveSubscriptions] = useState<
    SubscriptionObject[]
  >([]);

  const contextObj = useMemo(
    () => ({
      activeSubscriptions,
      setActiveSubscriptions,
    }),
    [activeSubscriptions]
  );

  useEffect(() => {
    setSum(() =>
      activeSubscriptions.reduce((acc, item) => acc + item.price, 0)
    );
  }, [activeSubscriptions]);

  return (
    <div className={classes.container}>
      <div className={counterClasses.counter__row}>
        <Counter
          count={activeSubscriptions.length || 0}
          text="Active Subcriptions"
        />
        <Counter count={sum} text="Monthly" sum />
      </div>
      <Context.Provider value={contextObj}>
        <List subscriptions={activeSubscriptions} />
      </Context.Provider>
    </div>
  );
};

export default Container;
