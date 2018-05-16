import { defineMessages } from 'react-intl';

export default {
  placeHistoricalStatuses: {
    values: [
      'current',
      'historical',
      'both',
      'unknown',
    ],
    messages: defineMessages({
      unknown: {
        id: 'option.placeHistoricalStatuses.unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
};
