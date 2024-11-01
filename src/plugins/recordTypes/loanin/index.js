import advancedSearch from './advancedSearch';
import columns from './columns';
import forms from './forms';
import fields from './fields';
import messages from './messages';
import title from './title';

export default () => (configContext) => ({
  recordTypes: {
    loanin: {
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      forms: forms(configContext),
      fields: fields(configContext),
      messages: messages(configContext),
      title: title(configContext),
    },
  },
});
