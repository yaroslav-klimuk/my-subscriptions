import React, { ReactElement } from 'react';
import subscriptions from '../../subscriptions';

export type IconProps = {
  name: keyof typeof subscriptions;
  size?: number;
};

const Icon: React.FC<IconProps> = ({ name, size }: IconProps): ReactElement => {
  const elem = React.createElement(subscriptions[name].icon, {
    color: subscriptions[name].color,
    size,
  });
  return elem;
};
Icon.defaultProps = {
  size: 50,
};
export default Icon;
