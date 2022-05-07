import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }: ButtonProps): JSX.Element => (
  <button type="button" className={classes.button}>
    {text}
  </button>
);

export default Button;
