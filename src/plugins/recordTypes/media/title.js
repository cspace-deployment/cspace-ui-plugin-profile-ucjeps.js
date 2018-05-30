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

  const common = getPart(data, 'media_common');
  const ucjeps = getPart(data, 'media_ucjeps');

  const identificationNumber = common && common.get('identificationNumber');
  const scientificTaxonomy = ucjeps && getDisplayName(ucjeps.get('scientificTaxonomy'));

  return [identificationNumber, scientificTaxonomy].filter(part => !!part).join(' – ');
};
