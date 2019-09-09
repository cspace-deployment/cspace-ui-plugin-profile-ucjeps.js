export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:uoc_common': {
        authorizationGroupList: {
          authorizationGroup: {
            authorizedBy: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared,organization/determination,organization/institution,organization/nomenclature,organization/typeassertion',
                  },
                },
              },
            },
          },
        },
        userGroupList: {
          userGroup: {
            user: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared,organization/determination,organization/institution,organization/nomenclature,organization/typeassertion',
                  },
                },
              },
            },
            userInstitution: {
              [config]: {
                view: {
                  props: {
                    source: 'organization/local,organization/shared,organization/determination,organization/institution,organization/nomenclature,organization/typeassertion',
                  },
                },
              },
            },
          },
        },
        locationList: {
          location: {
            [config]: {
              view: {
                props: {
                  source: 'organization/local,organization/shared,organization/determination,organization/institution,organization/nomenclature,organization/typeassertion,place/local,place/shared,location/local',
                },
              },
            },
          },
        },
        staffGroupList: {
          staffGroup: {
            staffName: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared,organization/determination,organization/institution,organization/nomenclature,organization/typeassertion',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};
