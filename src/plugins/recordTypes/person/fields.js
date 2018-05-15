export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:persons_common': {
        personTermGroupList: {
          personTermGroup: {
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
