import fields from './fields';
import vocabularies from './vocabularies';

export default () => (configContext) => ({
  recordTypes: {
    person: {
      vocabularies,
      fields: fields(configContext),
    },
  },
});
