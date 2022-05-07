import React, { ReactElement } from 'react';
import icons from './icons';

export type IconProps = {
  name: keyof typeof icons;
};

const Icon: React.FC<IconProps> = ({ name }: IconProps): ReactElement => {
  const elem = React.createElement(icons[name].icon, {
    color: icons[name].color,
    size: 50,
  });
  return elem;
};

export default Icon;
