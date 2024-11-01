import fields from './fields';

export default () => (configContext) => ({
  recordTypes: {
    movement: {
      fields: fields(configContext),
    },
  },
});
