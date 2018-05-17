export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:concepts_common': {
        conceptTermGroupList: {
          conceptTermGroup: {
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
