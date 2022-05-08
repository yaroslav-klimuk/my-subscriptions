import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  text: string;
  width?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  width,
  onClick,
}: ButtonProps): JSX.Element => (
  <button
    type="button"
    className={classes.button}
    style={{ width }}
    onClick={onClick}
  >
    {text}
  </button>
);
Button.defaultProps = {
  width: '100%',
  onClick: () => {},
};

export default Button;
