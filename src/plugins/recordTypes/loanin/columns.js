import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    loanInNumber: {
      disabled: true,
    },
    lenderLoanNumber: {
      messages: defineMessages({
        label: {
          id: 'column.loanin.default.lenderLoanNumber',
          defaultMessage: 'Lender\'s no.',
        },
      }),
      order: 10,
      sortBy: 'loansin_naturalhistory:lenderLoanNumber',
      width: 250,
    },
  },
});
