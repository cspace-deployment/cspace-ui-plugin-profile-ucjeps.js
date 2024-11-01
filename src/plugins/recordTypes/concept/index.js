import fields from './fields';
import vocabularies from './vocabularies';

export default () => (configContext) => ({
  recordTypes: {
    concept: {
      vocabularies,
      fields: fields(configContext),
    },
  },
});
