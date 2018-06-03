export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    measuredPartGroupList: {
      measuredPartGroup: {
        dimensionSubGroupList: {
          dimensionSubGroup: {
            measuredBy: {
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
    },
  };
};
