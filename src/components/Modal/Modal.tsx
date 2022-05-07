/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

interface ModalProps {
  open: boolean;
  onClose: (event: React.MouseEvent) => void;
}
const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
}: ModalProps): JSX.Element =>
  ReactDOM.createPortal(
    open && (
      <>
        <div className={classes.overlay} onClick={onClose} />
        <div className={classes.modal}>
          <span className={classes.modal__title}>Add new subcription</span>
          <div>123</div>
        </div>
      </>
    ),
    document.getElementById('portal') as HTMLElement
  );

export default Modal;
