import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    panel: {
      ...defineMessages({
        loanItem: {
          id: 'panel.loanout.loanItem',
          defaultMessage: 'Items Loaned',
        },
        loanReturn: {
          id: 'panel.loanout.loanReturn',
          defaultMessage: 'Items Returned',
        },
        loanTransfer: {
          id: 'panel.loanout.loanTransfer',
          defaultMessage: 'Loan Transfers',
        },
      }),
      ...extensions['ucbnh-loanout'].messages.panel,
    },
  };
};
