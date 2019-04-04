import { defineMessages } from 'react-intl';
import { computeTermFormattedDisplayName } from './utils';

export default (configContext) => {
  const {
    AutocompleteInput,
    OptionPickerInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:taxon_common': {
        taxonTermGroupList: {
          taxonTermGroup: {
            [config]: {
              compute: computeTermFormattedDisplayName,
            },
            termName: {
              [config]: {
                cloneable: false,
              },
            },
            termSource: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'taxontermsource',
                  },
                },
              },
            },
          },
        },
        taxonRank: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'taxonrank',
              },
            },
          },
        },
        taxonAuthorGroupList: {
          taxonAuthorGroup: {
            taxonAuthor: {
              [config]: {
                view: {
                  props: {
                    source: 'organization/nomenclature',
                  },
                },
              },
            },
          },
        },
        taxonCitationList: {
          taxonCitation: {
            [config]: {
              view: {
                type: TextInput,
                props: null,
              },
            },
          },
        },
        commonNameGroupList: {
          commonNameGroup: {
            commonName: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'taxon/common',
                  },
                },
              },
            },
            commonNameSource: {
              [config]: {
                view: {
                  type: TextInput,
                  props: null,
                },
              },
            },
          },
        },
      },
      ...extensions['ucbnh-taxon'].fields,
      'ns2:taxon_ucjeps': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/taxon/local/ucjeps',
          },
        },
        taxonMajorGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.taxon_ucjeps.taxonMajorGroup.name',
                defaultMessage: 'Major group',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'taxonMajorGroups',
              },
            },
          },
        },
      },
    },
  };
};
