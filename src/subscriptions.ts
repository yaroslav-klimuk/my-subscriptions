import { Netflix, Applemusic, Icon } from '@icons-pack/react-simple-icons';

interface SubscriptionsType {
  [key: string]: {
    icon: Icon;
    color: string;
    price: number;
  };
}

const subscriptions: SubscriptionsType = {
  Netflix: {
    icon: Netflix,
    color: '#E50914',
    price: 12,
  },
  AppleMusic: {
    icon: Applemusic,
    color: '#FA243C',
    price: 6,
  },
};

export default subscriptions;
