import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    inputTable: extensions.locality.messages.inputTable,
    panel: {
      ...defineMessages({
        locality: {
          id: 'panel.media.locality',
          defaultMessage: 'Locality Information',
        },
      }),
      ...extensions.locality.messages.panel,
    },
  };
};
