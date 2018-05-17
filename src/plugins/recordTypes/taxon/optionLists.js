import { defineMessages } from 'react-intl';

export default {
  taxonAuthorTypes: {
    values: [
      'author',
      'ascribed author',
      'parenthetical author',
      'parenthetical ascribed author',
    ],
    messages: defineMessages({
      author: {
        id: 'option.taxonAuthorTypes.author',
        defaultMessage: 'author',
      },
      'ascribed author': {
        id: 'option.taxonAuthorTypes.ascribed author',
        defaultMessage: 'ascribed author',
      },
      'parenthetical author': {
        id: 'option.taxonAuthorTypes.parenthetical author',
        defaultMessage: 'parenthetical author',
      },
      'parenthetical ascribed author': {
        id: 'option.taxonAuthorTypes.parenthetical ascribed author',
        defaultMessage: 'parenthetical ascribed author',
      },
    }),
  },
  taxonMajorGroups: {
    values: [
      'Spermatophytes',
      'Pteridophytes',
      'Algae',
      'Bryophytes',
      'Fungi',
      'Lichen',
      'n/a',
      'misc',
    ],
    messages: defineMessages({
      Spermatophytes: {
        id: 'option.taxonMajorGroups.Spermatophytes',
        defaultMessage: 'Spermatophytes',
      },
      Pteridophytes: {
        id: 'option.taxonMajorGroups.Pteridophytes',
        defaultMessage: 'Pteridophytes',
      },
      Algae: {
        id: 'option.taxonMajorGroups.Algae',
        defaultMessage: 'Algae',
      },
      Bryophytes: {
        id: 'option.taxonMajorGroups.Bryophytes',
        defaultMessage: 'Bryophytes',
      },
      Fungi: {
        id: 'option.taxonMajorGroups.Fungi',
        defaultMessage: 'Fungi',
      },
      Lichen: {
        id: 'option.taxonMajorGroups.Lichen',
        defaultMessage: 'Lichen',
      },
      'n/a': {
        id: 'option.taxonMajorGroups.n/a',
        defaultMessage: 'n/a',
      },
      misc: {
        id: 'option.taxonMajorGroups.misc',
        defaultMessage: 'misc',
      },
    }),
  },
  taxonTermSources: {
    values: [
      'unknown',
      'A California Flora and Supplement',
      'A Dictionary of the Flowering Plants and Ferns',
      'A Flora of California',
      'A Manual of the Flowering Plants of California',
      'Accession sheet',
      'Alan R. Smith',
      'Australian Plant Names Index',
      'Authors of Plant Names',
      'Biota of North America Program',
      'California Academy of Sciences',
      'California Native Plant Society Inventory',
      'Checklist of European Plants',
      'Checklist of the Vascular Plants of San Diego Count',
      'Christopher Allan Meacham',
      'Flora of North America',
      'GERMPlasm Resources Information Network',
      'Gray Card Index',
      'Harvard University Index to Collectors',
      'herbarium specimen label',
      'Herbarium, Botany Department, Bishop Museum',
      'Herbarium, University of Oregon',
      'Hunt Institute Biographical Dictionary',
      'Index Fungorum',
      'Index Herbariorum Index to Collectors',
      'Index Kewensis',
      'Index Nominum Algarum',
      'Index Nominum Genericorum',
      'Index to California Plant Names',
      'ineditus',
      'International Plant Names Index',
      'James Lauritz Reveal',
      'Jepson Interchange',
      'John Strother',
      'Kartesz Checklist',
      'Kartesz Geography',
      'Lisa Marie Schultheis',
      'Rancho Santa Ana',
      'Rebman and O\'Brien Checklist',
      'Richard L. Moe',
      'Richard Moe',
      'Royal Botanical Gardens (KEW)',
      'San Diego Museum of Natural History',
      'SMASCH',
      'Taxonomic Literature-II',
      'Test record',
      'The Jepson Manual: Higher Plants of California',
      'The work authored by the cited committee',
      'Thomas J. Rosatti',
      'Tropicos',
      'UC Botanical Garden',
      'UC Herbarium Types Database',
      'USGS Geographic Names Information System',
    ],
    // These are mostly titles and people's names, so I'm going to skip defining messages, since
    // they're not likely to be translated. Messages can be added later if labels need to be
    // changed.
  },
  taxonomicStatuses: {
    values: [
      'valid',
      'invalid',
      'misapplied',
      'accepted',
      'synonym',
      'illegitimate',
    ],
    messages: defineMessages({
      misapplied: {
        id: 'option.taxonomicStatuses.misapplied',
        defaultMessage: 'misapplied',
      },
      synonym: {
        id: 'option.taxonomicStatuses.synonym',
        defaultMessage: 'synonym',
      },
      illegitimate: {
        id: 'option.taxonomicStatuses.illegitimate',
        defaultMessage: 'illegitimate',
      },
    }),
  },
};
