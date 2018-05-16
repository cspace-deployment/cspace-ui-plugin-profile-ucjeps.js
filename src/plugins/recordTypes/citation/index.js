import fields from './fields';

export default () => configContext => ({
  recordTypes: {
    citation: {
      fields: fields(configContext),
    },
  },
});
