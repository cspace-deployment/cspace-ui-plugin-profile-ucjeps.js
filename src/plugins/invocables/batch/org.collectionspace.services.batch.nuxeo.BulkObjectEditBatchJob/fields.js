import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      taxon: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_naturalhistory.taxon.name',
              defaultMessage: 'Scientific name',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'taxon/local',
              showQuickAdd: false,
              showQuickAddCloneOption: false,
            },
          },
        },
      },
      fieldCollector: {
        [config]: {
          view: {
            props: {
              source: 'organization/local',
            },
          },
        },
      },
    },
  };
};
