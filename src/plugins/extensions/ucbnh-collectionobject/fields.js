export default (configContext) => {
  const {
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    'ns2:collectionobjects_naturalhistory': {
      taxonomicIdentGroupList: {
        taxonomicIdentGroup: {
          taxon: {
            [config]: {
              view: {
                props: {
                  source: 'taxon/local,taxon/unverified',
                },
              },
            },
          },
          identBy: {
            [config]: {
              view: {
                props: {
                  source: 'person/local,organization/determination',
                },
              },
            },
          },
          institution: {
            [config]: {
              view: {
                props: {
                  source: 'organization/institution',
                },
              },
            },
          },
        },
      },
      hybridParentGroupList: {
        hybridParentGroup: {
          hybridParent: {
            [config]: {
              view: {
                props: {
                  source: 'taxon/local,taxon/unverified',
                },
              },
            },
          },
        },
      },
      labelHeader: {
        [config]: {
          view: {
            type: AutocompleteInput,
            props: {
              source: 'concept/label',
            },
          },
        },
      },
      labelFooter: {
        [config]: {
          view: {
            type: AutocompleteInput,
            props: {
              source: 'concept/label',
            },
          },
        },
      },
      typeSpecimenGroupList: {
        typeSpecimenGroup: {
          typeSpecimenAssertionBy: {
            [config]: {
              view: {
                props: {
                  source: 'organization/typeassertion',
                },
              },
            },
          },
        },
      },
      donor: {
        [config]: {
          view: {
            props: {
              source: 'organization/institution',
            },
          },
        },
      },
      cultivated: {
        [config]: {
          defaultValue: 'false',
        },
      },
      // Need to re-include the locality extension, since we've customized it.
      ...extensions.locality.fields,
    },
  };
};
