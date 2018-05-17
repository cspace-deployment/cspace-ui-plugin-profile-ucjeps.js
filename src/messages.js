export default {
  'about.title': 'UCJEPS CollectionSpace',
  'about.contentHTML': `
    <p>
      Collections management system of the University and Jepson Herbaria.
    </p>
    <p>
      This service is supported by UC Berkeley <a href="http://research-it.berkeley.edu/">Research IT</a>.
      To send feedback, report bugs, or request support, email
      <a href="mailto:cspace-support@lists.berkeley.edu">cspace-support@lists.berkeley.edu</a>.
    </p>`,

  'footer.feedback': 'Contact UC Berkeley CollectionSpace support',
  'footer.feedbackUrl': 'mailto:cspace-support@lists.berkeley.edu',

  'vocab.organization.local.name': 'Collector',
  'vocab.organization.local.collectionName': 'Collector Organizations',

  'field.organizations_common.contactName.name': 'Contact/chair',

  'vocab.person.local.name': 'Default',
  'vocab.person.local.collectionName': 'Default Persons',

  'vocab.place.local.name': 'Default',
  'vocab.place.local.collectionName': 'Default Places',

  'field.places_common.termStatus.name': 'Admin status',

  'vocab.taxon.local.name': 'Default',
  'vocab.taxon.local.collectionName': 'Default Taxonomic Names',

  // FIXME: This is a bit of a hack that only works because the name message isn't used anywhere
  // besides the record editor. It would be better to have a message in field config that gets
  // passed into the field label as a separate prop.
  'field.taxon_common.termFormattedDisplayName.name': 'Formatted display name (Leave blank to auto fill)',
};
