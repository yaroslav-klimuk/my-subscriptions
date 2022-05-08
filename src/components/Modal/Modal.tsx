/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import subscriptions from '../../subscriptions';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

interface ModalProps {
  open: boolean;
  onClose: (event: React.MouseEvent) => void;
}
const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
}: ModalProps): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const selectHandler = (event: React.MouseEvent) => {
    const { id } = event.currentTarget;
    setSelectedItem(id);
  };

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

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
            placeholder="$0.00"
            className={classes.modal__input}
          />
          <Button text="Add" width="50%" />
        </div>
      </>
    ),
    document.getElementById('portal') as HTMLElement
  );
};

export default Modal;
