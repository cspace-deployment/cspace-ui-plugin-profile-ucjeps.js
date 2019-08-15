import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  invocables: {
    report: {
      ucjepsUOCbyRequesterObject: {
        fields: fields(configContext),
        forms: forms(configContext),
      },
    },
  },
});
