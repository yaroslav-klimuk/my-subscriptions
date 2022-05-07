import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
}: ButtonProps): JSX.Element => (
  <button type="button" className={classes.button} onClick={onClick}>
    {text}
  </button>
);
Button.defaultProps = {
  onClick: () => {},
};

export default Button;
