export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/objectNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/collection',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/taxonomicIdentGroupList/taxonomicIdentGroup/taxon',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/recordStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/typeSpecimenGroupList/typeSpecimenGroup/typeSpecimenKind',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/fieldCollectors/fieldCollector',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_common/fieldCollectionNumber',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_naturalhistory/localityGroupList/localityGroup/fieldLocVerbatim',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/localityGroupList/localityGroup/fieldLocCounty',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/localityGroupList/localityGroup/fieldLocState',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/localityGroupList/localityGroup/fieldLocCountry',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/forms/form',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/labelHeader',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/labelFooter',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/phase',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/sex',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
