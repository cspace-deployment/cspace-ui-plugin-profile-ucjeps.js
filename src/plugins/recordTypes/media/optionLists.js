import { defineMessages } from 'react-intl';

export default {
  mediaTypes: {
    values: [
      'dataset',
      'Digital Image',
      'document',
      'Illustration',
      'moving_image',
      'Scanned Photograph',
      'Slide (Photograph)',
      'still_image',
      'sound',
    ],
    messages: defineMessages({
      'Digital Image': {
        id: 'option.mediaTypes.Digital Image',
        defaultMessage: 'digital image',
      },
      Illustration: {
        id: 'option.mediaTypes.Illustration',
        defaultMessage: 'illustration',
      },
      'Scanned Photograph': {
        id: 'option.mediaTypes.Scanned Photograph',
        defaultMessage: 'scanned photograph',
      },
      'Slide (Photograph)': {
        id: 'option.mediaTypes.Slide (Photograph)',
        defaultMessage: 'slide (photograph)',
      },
    }),
  },
};
