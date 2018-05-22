import { defineMessages } from 'react-intl';

export default {
  handwrittenValues: {
    values: [
      'Unknown',
      'yes',
      'no',
    ],
    messages: defineMessages({
      Unknown: {
        id: 'option.handwrittenValues.Unknown',
        defaultMessage: 'unknown',
      },
      yes: {
        id: 'option.handwrittenValues.yes',
        defaultMessage: 'yes',
      },
      no: {
        id: 'option.handwrittenValues.no',
        defaultMessage: 'no',
      },
    }),
  },
  collections: {
    values: [
      'Unknown',
      'Jepson Herbarium',
      'University of California Herbarium',
      'University of California- Santa Barbara',
      'Herbarium (UCSC)',
      'University of California',
      'DHN',
    ],
    messages: defineMessages({
      Unknown: {
        id: 'option.collections.Unknown',
        defaultMessage: 'unknown',
      },
      'Jepson Herbarium': {
        id: 'option.collections.Jepson Herbarium',
        defaultMessage: 'Jepson Herbarium',
      },
      'University of California Herbarium': {
        id: 'option.collections.University of California Herbarium',
        defaultMessage: 'University Herbarium, University of California, Berkeley (UC)',
      },
      'University of California- Santa Barbara': {
        id: 'option.collections.University of California- Santa Barbara',
        defaultMessage: 'University of California- Santa Barbara',
      },
      'Herbarium (UCSC)': {
        id: 'option.collections.Herbarium (UCSC)',
        defaultMessage: 'Herbarium (UCSC)',
      },
      'University of California': {
        id: 'option.collections.University of California',
        defaultMessage: 'University of California',
      },
      DHN: {
        id: 'option.collections.DHN',
        defaultMessage: 'DHN',
      },
    }),
  },
  forms: {
    values: [
      'Unknown',
      'Mounted on Paper',
      'Loose in packet',
      'Stored in a Box or Bag',
      'Preserved in Liquid',
      'Microscope Slide Preparation',
      'Photograph',
      'Illustration',
      'Photocopy',
      'Box',
      'Bag',
      'Map',
    ],
    messages: defineMessages({
      Unknown: {
        id: 'option.collections.Unknown',
        defaultMessage: 'unknown',
      },
      'Mounted on Paper': {
        id: 'option.collections.Mounted on Paper',
        defaultMessage: 'mounted on paper',
      },
      'Loose in packet': {
        id: 'option.collections.Loose in packet',
        defaultMessage: 'loose in packet',
      },
      'Stored in a Box or Bag': {
        id: 'option.collections.Stored in a Box or Bag',
        defaultMessage: 'stored in a box or bag',
      },
      'Preserved in Liquid': {
        id: 'option.collections.Preserved in Liquid',
        defaultMessage: 'preserved in liquid',
      },
      'Microscope Slide Preparation': {
        id: 'option.collections.Microscope Slide Preparation',
        defaultMessage: 'microscope slide preparation',
      },
      Photograph: {
        id: 'option.collections.Photograph',
        defaultMessage: 'photograph',
      },
      Illustration: {
        id: 'option.collections.Illustration',
        defaultMessage: 'illustration',
      },
      Photocopy: {
        id: 'option.collections.Photocopy',
        defaultMessage: 'photocopy',
      },
      Box: {
        id: 'option.collections.Box',
        defaultMessage: 'box',
      },
      Bag: {
        id: 'option.collections.Bag',
        defaultMessage: 'bag',
      },
      Map: {
        id: 'option.collections.Map',
        defaultMessage: 'map',
      },
    }),
  },
};
