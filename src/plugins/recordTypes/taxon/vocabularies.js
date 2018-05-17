import { defineMessages } from 'react-intl';

export default {
  common: {
    serviceConfig: {
      servicePath: 'urn:cspace:name(common)',
    },
  },
  unverified: {
    messages: defineMessages({
      name: {
        id: 'vocab.taxon.unverified.name',
        description: 'The name of the unverified taxon vocabulary.',
        defaultMessage: 'Unverified',
      },
      collectionName: {
        id: 'vocab.taxon.unverified.collectionName',
        description: 'The name of a collection of records from the unverified taxon vocabulary.',
        defaultMessage: 'Unverified Taxonomic Names',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(unverified)',
    },
  },
};
