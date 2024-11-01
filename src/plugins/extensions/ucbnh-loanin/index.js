import fields from './fields';

export default () => (configContext) => ({
  extensions: {
    'ucbnh-loanin': {
      fields: fields(configContext),
    },
  },
});
