export default (configContext) => {
  const {
    OptionPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:organizations_naturalhistory': {
      associatedPersonGroupList: {
        associatedPersonGroup: {
          associatedPersonRole: {
            [config]: {
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'orgAssocPersonRoles',
                },
              },
            },
          },
        },
      },
    },
  };
};
