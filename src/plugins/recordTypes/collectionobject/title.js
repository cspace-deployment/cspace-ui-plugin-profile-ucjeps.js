export default configContext => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  const {
    getDisplayName,
  } = configContext.refNameHelpers;

  if (!data) {
    return '';
  }

  const commonPart = getPart(data, 'collectionobjects_common');
  const naturalHistoryPart = getPart(data, 'collectionobjects_naturalhistory');

  const objectNumber = commonPart && commonPart.get('objectNumber');

  const taxon =
    naturalHistoryPart &&
    getDisplayName(
      naturalHistoryPart.getIn(['taxonomicIdentGroupList', 'taxonomicIdentGroup', 0, 'taxon'])
    );

  return [objectNumber, taxon].filter(part => !!part).join(' – ');
};
