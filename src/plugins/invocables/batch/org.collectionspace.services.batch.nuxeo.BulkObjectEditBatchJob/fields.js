export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
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
      fieldCollector: {
        [config]: {
          view: {
            props: {
              source: 'organization/local',
            },
          },
        },
      },
      taxon: {
        [config]: {
          view: {
            props: {
              source: 'taxon/local,taxon/unverified,taxon/common',
            },
          },
        },
      },
    },
  };
};
