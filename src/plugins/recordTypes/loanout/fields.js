export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:loansout_common': {
        loanOutNumber: {
          [config]: {
            view: {
              props: {
                source: 'uc-loanout,jeps-loanout,loanout',
              },
            },
          },
        },
        borrower: {
          [config]: {
            view: {
              props: {
                source: 'person/local,organization/local,organization/institution',
              },
            },
          },

        },
      },
      ...extensions['ucbnh-loanout'].fields,
    },
  };
};
