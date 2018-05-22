import fields from './fields';

export default () => configContext => ({
  extensions: {
    'ucbnh-collectionobject': {
      fields: fields(configContext),
    },
  },
});
