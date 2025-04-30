import { defineMessages } from 'react-intl';

export default {
  activity: {
    disabled: true,
  },
  material: {
    disabled: true,
  },
  associated: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.associated.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Associated',
      },
      collectionName: {
        id: 'vocab.concept.associated.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Associated Concepts',
      },
      itemName: {
        id: 'vocab.concept.associated.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Associated Concept',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(associated)',
    },
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
