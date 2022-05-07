import React, { ReactElement } from 'react';
import subscriptions from '../../subscriptions';

export type IconProps = {
  name: keyof typeof subscriptions;
};

const Icon: React.FC<IconProps> = ({ name }: IconProps): ReactElement => {
  const elem = React.createElement(subscriptions[name].icon, {
    color: subscriptions[name].color,
    size: 50,
  });
  return elem;
};

export default Icon;
