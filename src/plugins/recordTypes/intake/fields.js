export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:intakes_common': {
        currentOwners: {
          currentOwner: {
            [config]: {
              view: {
                props: {
                  source: 'person/local,organization/local,organization/institution',
                },
              },
            },
          },
        },
        depositorGroupList: {
          depositorGroup: {
            depositor: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,organization/local,organization/institution',
                  },
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
                  source: 'person/local,organization/local,organization/institution',
                },
              },
            },
          },
        },
        valuer: {
          [config]: {
            view: {
              props: {
                source: 'person/local,organization/local,organization/institution',
              },
            },
          },
        },
        insurers: {
          insurer: {
            [config]: {
              view: {
                props: {
                  source: 'person/local,organization/local,organization/institution',
                },
              },
            },
          },
        },
        conditionCheckersOrAssessors: {
          conditionCheckerOrAssessor: {
            [config]: {
              view: {
                props: {
                  source: 'person/local,organization/local,organization/institution',
                },
              },
            },
          },
        },
      },
    },
  };
};
