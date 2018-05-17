import { defineMessages } from 'react-intl';

export default {
  associated: {
    disabled: true,
  },
  activity: {
    disabled: true,
  },
  material: {
    disabled: true,
  },
  label: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.label.name',
        description: 'The name of the label concept vocabulary.',
        defaultMessage: 'Label Text',
      },
      collectionName: {
        id: 'vocab.concept.label.collectionName',
        description: 'The name of a collection of records from the label concept vocabulary.',
        defaultMessage: 'Label Texts',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(concept)',
    },
  },
};
