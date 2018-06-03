export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:blobs_common': {
        file: {
          [config]: {
            view: {
              props: {
                accept: 'image/*,video/*,audio/*,text/plain,application/pdf',
              },
            },
          },
        },
      },
    },
  };
};
