export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:works_common': {
        workTermGroupList: {
          workTermGroup: {
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
      },
    },
  };
};
