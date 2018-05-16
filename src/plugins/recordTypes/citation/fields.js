export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:citations_common': {
        citationTermGroupList: {
          citationTermGroup: {
            termSource: {
              [config]: {
                view: {
                  type: TextInput,
                  props: null,
                },
              },
            },
          },
        },
        citationPublicationInfoGroupList: {
          citationPublicationInfoGroup: {
            publisher: {
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
        citationAgentInfoGroupList: {
          citationAgentInfoGroup: {
            agent: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,organization/institution',
                  },
                },
              },
            },
          },
        },
        citationRelatedTermsGroupList: {
          citationRelatedTermsGroup: {
            relatedTerm: {
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
    },
  };
};
