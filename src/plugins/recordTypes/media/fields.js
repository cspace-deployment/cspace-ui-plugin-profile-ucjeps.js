import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TextInput,
    OptionPickerInput,
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
      'ns2:media_common': {
        contributor: {
          [config]: {
            view: {
              props: {
                source: 'person/local,organization/local,organization/institution',
              },
            },
          },
        },
        creator: {
          [config]: {
            view: {
              props: {
                source: 'person/local,organization/local,organization/institution',
              },
            },
          },
        },
        publisher: {
          [config]: {
            view: {
              props: {
                source: 'person/local,organization/local,organization/institution',
              },
            },
          },
        },
        rightsHolder: {
          [config]: {
            view: {
              props: {
                source: 'person/local,organization/local,organization/institution',
              },
            },
          },
        },
      },
      'ns2:media_ucjeps': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media/local/ucjeps',
          },
        },
        handwritten: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_ucjeps.handwritten.name',
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
                id: 'field.media_ucjeps.postToPublic.name',
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
        scientificTaxonomy: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_ucjeps.scientificTaxonomy.name',
                defaultMessage: 'Scientific name',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'taxon/local',
              },
            },
          },
        },
        mediaOtherNumberList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          mediaOtherNumber: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.media_ucjeps.mediaOtherNumber.name',
                  defaultMessage: 'Other number',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            numberValue: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.media_ucjeps.numberValue.fullName',
                    defaultMessage: 'Other number',
                  },
                  name: {
                    id: 'field.media_ucjeps.numberValue.name',
                    defaultMessage: 'Number',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            numberType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.media_ucjeps.numberType.fullName',
                    defaultMessage: 'Other number type',
                  },
                  name: {
                    id: 'field.media_ucjeps.numberType.name',
                    defaultMessage: 'Type',
                  },
                }),
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
        majorCategory: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_ucjeps.majorCategory.name',
                defaultMessage: 'Major category',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'majorcategories',
              },
            },
          },
        },
        morphologyCategories: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          morphologyCategory: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.media_ucjeps.morphologyCategory.name',
                  defaultMessage: 'Morphology category',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'morphologycategories',
                },
              },
            },
          },
        },
        persons: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          person: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.media_ucjeps.person.name',
                  defaultMessage: 'Person',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local',
                },
              },
            },
          },
        },
        places: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          place: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.media_ucjeps.place.name',
                  defaultMessage: 'Place',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'place/local',
                },
              },
            },
          },
        },
        collector: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_ucjeps.collector.name',
                defaultMessage: 'Collector',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'organization/local',
              },
            },
          },
        },
        mediaTaxaGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          mediaTaxaGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.media_ucjeps.mediaTaxaGroup.name',
                  defaultMessage: 'Associated taxon',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            associatedTaxon: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.media_ucjeps.associatedTaxon.fullName',
                    defaultMessage: 'Associated taxon scientific name',
                  },
                  name: {
                    id: 'field.media_ucjeps.associatedTaxon.name',
                    defaultMessage: 'Scientific name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'taxon/local',
                  },
                },
              },
            },
            commonName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.media_ucjeps.commonName.fullName',
                    defaultMessage: 'Associated taxon common name',
                  },
                  name: {
                    id: 'field.media_ucjeps.commonName.name',
                    defaultMessage: 'Common name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            interaction: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.media_ucjeps.interaction.fullName',
                    defaultMessage: 'Associated taxon interaction',
                  },
                  name: {
                    id: 'field.media_ucjeps.interaction.name',
                    defaultMessage: 'Interaction',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    // Defined in ucbnh-collectionobject extension
                    source: 'associatedTaxaInteractions',
                  },
                },
              },
            },
          },
        },
        ...extensions.locality.fields,
      },
    },
  };
};
