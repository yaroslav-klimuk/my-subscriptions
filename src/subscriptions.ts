import {
  Icon,
  Netflix,
  Applemusic,
  Spotify,
  OnePassword,
  Appletv,
  Applearcade,
  Adobecreativecloud,
  Youtube,
  Icloud,
  Lastpass,
  Dashlane,
} from '@icons-pack/react-simple-icons';

export interface SubscriptionsType {
  [key: string]: {
    icon: Icon;
    label: string;
    color: string;
  };
}

const subscriptions: SubscriptionsType = {
  onePassword: {
    icon: OnePassword,
    label: '1Password',
    color: '#0094F5',
  },
  adobeCreativeCloud: {
    icon: Adobecreativecloud,
    label: 'Adobe Creative Cloud',
    color: '#DA1F26',
  },
  appleArcade: {
    icon: Applearcade,
    label: 'Apple Arcade',
    color: '#000000',
  },
  appleMusic: {
    icon: Applemusic,
    label: 'Apple Music',
    color: '#FA243C',
  },
  appleTV: {
    icon: Appletv,
    label: 'AppleTV',
    color: '#000000',
  },
  dashlane: {
    icon: Dashlane,
    label: 'Dashlane',
    color: '#0E353D',
  },
  iCloud: {
    icon: Icloud,
    label: 'iCloud',
    color: '#3693F3',
  },
  lastPass: {
    icon: Lastpass,
    label: 'LastPass',
    color: '#D32D27',
  },
  netflix: {
    icon: Netflix,
    label: 'Netflix',
    color: '#E50914',
  },
  spotify: {
    icon: Spotify,
    label: 'Spotify',
    color: '#1DB954',
  },
  youtube: {
    icon: Youtube,
    label: 'Youtube',
    color: '#FF0000',
  },
};

export default subscriptions;
