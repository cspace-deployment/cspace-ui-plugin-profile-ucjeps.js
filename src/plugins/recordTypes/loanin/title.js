export default configContext => (data) => {
  const {
    getPart,
    deepGet,
  } = configContext.recordDataHelpers;

  const {
    getDisplayName,
  } = configContext.refNameHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'loansin_common');
  const naturalHistory = getPart(data, 'loansin_naturalhistory');

  const lenderLoanNumber = naturalHistory && naturalHistory.get('lenderLoanNumber');
  const borrower = common && getDisplayName(deepGet(common, ['lenderGroupList', 'lenderGroup', 0, 'lender']));

  return [lenderLoanNumber, borrower].filter(part => !!part).join(' – ');
};
