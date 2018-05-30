import { defineMessages } from 'react-intl';

export default {
  loanoutCollections: {
    values: [
      'UC',
      'JEPS',
    ],
  },
  loanoutObjectKinds: {
    values: [
      'Unknown',
      'Sheet',
      'Specimens',
      'Box',
      'Bag',
      'Sealed Bag',
      'Jar',
      'Packet',
      'Slide',
      'Unmounted',
      'Photograph',
      'Photocopy',
      'Illustration',
    ],
    messages: defineMessages({
      Unknown: {
        id: 'option.loanoutObjectKinds.Unknown',
        defaultMessage: 'unknown',
      },
      Specimens: {
        id: 'option.loanoutObjectKinds.Specimens',
        defaultMessage: 'specimens',
      },
      Box: {
        id: 'option.loanoutObjectKinds.Box',
        defaultMessage: 'box',
      },
      Bag: {
        id: 'option.loanoutObjectKinds.Bag',
        defaultMessage: 'bag',
      },
      'Sealed Bag': {
        id: 'option.loanoutObjectKinds.Sealed Bag',
        defaultMessage: 'sealed bag',
      },
      Packet: {
        id: 'option.loanoutObjectKinds.Packet',
        defaultMessage: 'packet',
      },
      Slide: {
        id: 'option.loanoutObjectKinds.Slide',
        defaultMessage: 'slide',
      },
      Unmounted: {
        id: 'option.loanoutObjectKinds.Unmounted',
        defaultMessage: 'unmounted',
      },
      Photograph: {
        id: 'option.loanoutObjectKinds.Photograph',
        defaultMessage: 'photograph',
      },
      Photocopy: {
        id: 'option.loanoutObjectKinds.Photocopy',
        defaultMessage: 'photocopy',
      },
      Illustration: {
        id: 'option.loanoutObjectKinds.Illustration',
        defaultMessage: 'illustration',
      },
    }),
  },
};
