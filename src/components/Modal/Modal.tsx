/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import subscriptions from '../../subscriptions';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import { Context } from '../Container/Container';
import { SubscriptionObject } from '../List/types';

interface ModalProps {
  open: boolean;
  onClose: (event: React.MouseEvent | null) => void;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
}: ModalProps): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [priceInput, setPriceInput] = useState('');

  const selectHandler = (event: React.MouseEvent) => {
    const { id } = event.currentTarget;
    setSelectedItem(id);
  };

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPriceInput(event.currentTarget.value);
  };

  const context = useContext(Context);

  const addNewHandler = () => {
    const newSubscription = {
      name: selectedItem,
      price: Number(priceInput),
    };
    context.setActiveSubscriptions((prev: SubscriptionObject[]) => [
      ...prev,
      newSubscription,
    ]);
    onClose(null);
  };

  useEffect(() => () => setSelectedItem(null), []);

  return ReactDOM.createPortal(
    open && (
      <>
        <div className={classes.overlay} onClick={onClose} />
        <div className={classes.modal}>
          <span className={classes.modal__title}>Add new subcription</span>
          <div className={classes.modal__list}>
            {Object.entries(subscriptions).map(([key, val]) => (
              <div
                id={key}
                key={key}
                className={`${classes.modal__item} ${
                  key === selectedItem && classes.modal__item_active
                }`}
                onClick={selectHandler}
              >
                <Icon name={key} size={35} />
                <span>{val.label}</span>
              </div>
            ))}
          </div>
          <span className={classes.modal__title}>Price per Month</span>
          <input
            type="text"
            value={priceInput}
            onChange={onInputChange}
            placeholder="$0.00"
            className={classes.modal__input}
          />
          <Button text="Add" width="50%" onClick={addNewHandler} />
        </div>
      </>
    ),
    document.getElementById('portal') as HTMLElement
  );
};

export default Modal;
