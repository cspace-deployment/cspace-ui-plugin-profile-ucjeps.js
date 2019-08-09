export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      targetCSID: {
        [config]: {
          view: {
            props: {
              source: 'citation/local,citation/worldcat,concept/label,organization/local,organization/determination,organization/institution,organization/nomenclature,organization/typeassertion,person/local,place/local,location/local,taxon/local,taxon/common,taxon/unverified,work/local,work/cona',
              showQuickAdd: false,
            },
          },
        },
      },
    },
  };
};
