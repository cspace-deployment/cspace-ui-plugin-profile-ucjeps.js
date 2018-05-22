import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    inputTable: extensions['ucbnh-collectionobject'].messages.inputTable,
    panel: {
      ...defineMessages({
        collectorLabel: {
          id: 'panel.collectionobject.collectorLabel',
          defaultMessage: 'Collector Label Information',
        },
        locality: {
          id: 'panel.collectionobject.locality',
          defaultMessage: 'Locality Information',
        },
      }),
      ...extensions['ucbnh-collectionobject'].messages.panel,
    },
  };
};
