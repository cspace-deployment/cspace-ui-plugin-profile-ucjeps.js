export default (configContext) => {
  const {
    OptionPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:collectionobjects_annotation': {
      annotationGroupList: {
        annotationGroup: {
          annotationType: {
            [config]: {
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'annotationTypes',
                },
              },
            },
          },
        },
      },
    },
  };
};
