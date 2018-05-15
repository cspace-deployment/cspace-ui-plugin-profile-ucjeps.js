import { defineMessages } from 'react-intl';

export default {
  ulan: {
    disabled: true,
  },
  institution: {
    messages: defineMessages({
      name: {
        id: 'vocab.organization.institution.name',
        description: 'The name of the institution vocabulary.',
        defaultMessage: 'Institution',
      },
      collectionName: {
        id: 'vocab.organization.institution.collectionName',
        description: 'The name of a collection of records from the institution vocabulary.',
        defaultMessage: 'Institution Organizations',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(institution)',
    },
  },
  nomenclature: {
    messages: defineMessages({
      name: {
        id: 'vocab.organization.nomenclature.name',
        description: 'The name of the nomenclature vocabulary.',
        defaultMessage: 'Nomenclature',
      },
      collectionName: {
        id: 'vocab.organization.nomenclature.collectionName',
        description: 'The name of a collection of records from the nomenclature vocabulary.',
        defaultMessage: 'Nomenclature Organizations',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(nomenclature)',
    },
  },
  typeassertion: {
    messages: defineMessages({
      name: {
        id: 'vocab.organization.typeassertion.name',
        description: 'The name of the typeassertion vocabulary.',
        defaultMessage: 'Type Assertion',
      },
      collectionName: {
        id: 'vocab.organization.typeassertion.collectionName',
        description: 'The name of a collection of records from the typeassertion vocabulary.',
        defaultMessage: 'Type Assertion Organizations',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(typeassertion)',
    },
  },
  determination: {
    messages: defineMessages({
      name: {
        id: 'vocab.organization.determination.name',
        description: 'The name of the determination vocabulary.',
        defaultMessage: 'Determination',
      },
      collectionName: {
        id: 'vocab.organization.determination.collectionName',
        description: 'The name of a collection of records from the determination vocabulary.',
        defaultMessage: 'Determination Organizations',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(determination)',
    },
  },
};
