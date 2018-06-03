import content from './content';
import fields from './fields';

export default () => configContext => ({
  recordTypes: {
    blob: {
      content,
      fields: fields(configContext),
    },
  },
});
