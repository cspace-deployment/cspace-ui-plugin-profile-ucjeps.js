import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      title: {
        disabled: true,
      },
      scientificTaxonomy: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.media.default.scientificTaxonomy',
            defaultMessage: 'Scientific name',
          },
        }),
        order: 30,
        sortBy: 'media_ucjeps:scientificTaxonomy',
        width: 380,
      },
    },
  };
};
