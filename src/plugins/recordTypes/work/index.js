import fields from './fields';

export default () => (configContext) => ({
  recordTypes: {
    work: {
      fields: fields(configContext),
    },
  },
});
