import fields from './fields';

export default () => configContext => ({
  extensions: {
    dimension: {
      fields: fields(configContext),
    },
  },
});
