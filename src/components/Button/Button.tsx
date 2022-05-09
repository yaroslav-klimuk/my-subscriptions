import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  text: string;
  width?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  width,
  disabled,
  onClick,
}: ButtonProps): JSX.Element => (
  <button
    type="button"
    className={`${classes.button} ${disabled && classes.button_disabled}`}
    style={{ width }}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);
Button.defaultProps = {
  width: '100%',
  disabled: false,
  onClick: () => {},
};

export default Button;
