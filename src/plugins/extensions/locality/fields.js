import { computeDecimalLatLong } from './utils';

export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    localityGroupList: {
      localityGroup: {
        [config]: {
          compute: computeDecimalLatLong,
        },
        decimalLatitude: {
          [config]: {
            view: {
              props: {
                readOnly: true,
              },
            },
          },
        },
        decimalLongitude: {
          [config]: {
            view: {
              props: {
                readOnly: true,
              },
            },
          },
        },
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
  };
};
