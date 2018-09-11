export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:loansout_naturalhistory': {
      collection: {
        [config]: {
          view: {
            props: {
              source: 'loanoutCollections',
            },
          },
        },
      },
      taxonomyList: {
        taxonomy: {
          [config]: {
            repeating: true,
            view: {
              props: {
                source: 'taxon/local,taxon/unverified',
              },
            },
          },
        },
      },
      transferGroupList: {
        transferGroup: {
          transferOrg: {
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
      geographyList: {
        geography: {
          [config]: {
            repeating: true,
          },
        },
      },
      objKindList: {
        objKind: {
          [config]: {
            repeating: true,
          },
        },
      },
    },
  };
};
