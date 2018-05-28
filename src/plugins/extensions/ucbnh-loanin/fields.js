export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:loansin_naturalhistory': {
      lenderLoanNumber: {
        [config]: {
          required: true,
        },
      },
      transferInOrg: {
        [config]: {
          view: {
            props: {
              source: 'organization/institution',
            },
          },
        },
      },
      transferOutGroupList: {
        transferOutGroup: {
          transferOutOrg: {
            [config]: {
              view: {
                props: {
                  source: 'organization/institution',
                },
              },
            },
          },
        },
      },
    },
  };
};
