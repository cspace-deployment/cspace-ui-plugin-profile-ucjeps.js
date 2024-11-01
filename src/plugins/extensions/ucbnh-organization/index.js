import fields from './fields';
import optionLists from './optionLists';

export default () => (configContext) => ({
  optionLists,
  extensions: {
    'ucbnh-organization': {
      fields: fields(configContext),
    },
  },
});
