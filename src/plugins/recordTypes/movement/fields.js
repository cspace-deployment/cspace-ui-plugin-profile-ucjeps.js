export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:movements_common': {
        currentLocation: {
          [config]: {
            view: {
              props: {
                source: 'location/local,organization/institution',
              },
            },
          },
        },
      },
    },
  };
};
