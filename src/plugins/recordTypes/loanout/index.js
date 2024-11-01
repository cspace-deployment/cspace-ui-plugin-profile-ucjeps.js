import forms from './forms';
import fields from './fields';
import idGenerators from './idGenerators';
import messages from './messages';

export default () => (configContext) => ({
  idGenerators,
  recordTypes: {
    loanout: {
      forms: forms(configContext),
      fields: fields(configContext),
      messages: messages(configContext),
    },
  },
});
