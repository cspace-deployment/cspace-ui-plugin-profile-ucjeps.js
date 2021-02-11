export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      target: {
        [config]: {
          view: {
            props: {
              source: 'citation/local,citation/worldcat,concept/label,concept/occasion,organization/local,organization/determination,organization/institution,organization/nomenclature,organization/typeassertion,person/local,place/local,location/local,taxon/local,taxon/common,taxon/unverified,work/local,work/cona',
              showQuickAdd: false,
            },
          },
        },
      },
    },
  };
};
