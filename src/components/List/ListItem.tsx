/* eslint-disable */
import React from 'react';
import classes from './List.module.css';
import Icon, { IconProps } from './Icon';

type SubscriptionsType = {
  subscriptions: { name: string; amount: number }[];
};

const ListItem = ({ subscriptions }: SubscriptionsType) => {
  return (
    <>
      {subscriptions.map(({ name, amount }) => (
        <div className={classes.listItem} key={name}>
          <Icon name="Netflix" />
          <div className={classes.listItem__body}>
            <span className={classes.listItem__text}>{name}</span>
            <span className={classes.listItem__text}>${amount}</span>
            <button type="button" className={classes.listItem__button}>
              <svg
                fill="#818181"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

{
}
export default ListItem;