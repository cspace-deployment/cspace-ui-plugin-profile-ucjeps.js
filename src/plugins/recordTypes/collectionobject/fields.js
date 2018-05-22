import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    OptionPickerInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_common': {
        objectNumber: {
          [config]: {
            required: false,
            view: {
              props: {
                source: 'ucAccession,jepsAccession',
              },
            },
          },
        },
        otherNumberList: {
          otherNumber: {
            numberType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'numbertype',
                  },
                },
              },
            },
          },
        },
        collection: {
          [config]: {
            defaultValue: 'University of California Herbarium',
          },
        },
        phase: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'objectphase',
              },
            },
          },
        },
        forms: {
          form: {
            [config]: {
              defaultValue: 'Mounted on Paper',
            },
          },
        },
        owners: {
          owner: {
            [config]: {
              view: {
                props: {
                  source: 'person/local,organization/local,organization/institution',
                },
              },
            },
          },
        },
        assocConceptGroupList: {
          assocConceptGroup: {
            assocConcept: {
              [config]: {
                view: {
                  type: TextInput,
                  props: null,
                },
              },
            },
          },
        },
        assocOrganizationGroupList: {
          assocOrganizationGroup: {
            assocOrganization: {
              [config]: {
                view: {
                  props: {
                    source: 'organization/local,organization/institution',
                  },
                },
              },
            },
          },
        },
        assocEventOrganizations: {
          assocEventOrganization: {
            [config]: {
              view: {
                props: {
                  source: 'organization/local,organization/institution',
                },
              },
            },
          },
        },
        referenceGroupList: {
          referenceGroup: {
            reference: {
              [config]: {
                view: {
                  type: TextInput,
                  props: null,
                },
              },
            },
          },
        },
        fieldCollectors: {
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
      },
      ...extensions['ucbnh-collectionobject'].fields,
      'ns2:collectionobjects_ucjeps': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/ucjeps',
          },
        },
        handwritten: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_ucjeps.handwritten.name',
                defaultMessage: 'Handwritten label',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'handwrittenValues',
              },
            },
          },
        },
        postToPublic: {
          [config]: {
            defaultValue: 'yes',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_ucjeps.postToPublic.name',
                defaultMessage: 'Post to public',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'yesNoValues',
              },
            },
          },
        },
      },
    },
  };
};
