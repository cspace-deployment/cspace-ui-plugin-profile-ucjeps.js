export default (configContext) => {
  const {
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:places_common': {
        placeTermGroupList: {
          placeTermGroup: {
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
        placeOwnerGroupList: {
          placeOwnerGroup: {
            owner: {
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
        placeGeoRefGroupList: {
          placeGeoRefGroup: {
            geoRefSource: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'georefsource',
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
