export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:loansin_common': {
        loanInNumber: {
          [config]: {
            required: false,
          },
        },
        lenderGroupList: {
          lenderGroup: {
            lender: {
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
      ...extensions['ucbnh-loanin'].fields,
    },
  };
};
