import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    inputTable: extensions['ucbnh-loanin'].messages.inputTable,
    panel: {
      ...defineMessages({
        return: {
          id: 'panel.loanin.return',
          defaultMessage: 'Items Returned',
        },
      }),
      ...extensions['ucbnh-loanin'].messages.panel,
    },
  };
};
