import React, { useState } from 'react';
import ListItem from './ListItem';
import classes from './List.module.css';
import { SubscriptionObject } from './types';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

interface ListProps {
  subscriptions: SubscriptionObject[];
}

const List: React.FC<ListProps> = ({
  subscriptions,
}: ListProps): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);

  const clickHandler = () => {
    setOpenModal(!openModal);
  };

  const closeHandler = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={classes.list__container}>
        <div className={classes.list__body}>
          {subscriptions.map(({ name, amount }) => (
            <ListItem name={name} amount={amount} key={name} />
          ))}
        </div>
        <div className={classes.list__footer}>
          <Button text="Add new" width="50%" onClick={clickHandler} />
        </div>
      </div>
      <Modal open={openModal} onClose={closeHandler} />
    </>
  );
};

export default List;
