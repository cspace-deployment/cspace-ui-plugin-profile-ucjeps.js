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

  'createPage.object': 'Cataloging Records',

  // Organization 
  'vocab.organization.local.name': 'Collector',
  'vocab.organization.local.collectionName': 'Collector Organizations',

  'field.organizations_common.contactGroup.name': 'Contact/chair',
  'field.organizations_common.contactName.name': 'Name',
  'field.organizations_common.contactName.fullName': 'Contact/chair name',

  // Persons
  'vocab.person.local.name': 'Default',
  'vocab.person.local.collectionName': 'Default Persons',

  // Place
  'vocab.place.local.name': 'Default',
  'vocab.place.local.collectionName': 'Default Places',

  'field.places_common.termStatus.name': 'Admin status',
  'field.places_common.termStatus.fullName': 'Admin status',

  // Taxon
  'vocab.taxon.local.name': 'Default',
  'vocab.taxon.local.collectionName': 'Default Taxonomic Names',

  // FIXME: This is a bit of a hack that only works because the name message isn't used anywhere
  // besides the record editor. It would be better to have a message in field config that gets
  // passed into the field label as a separate prop.
  'field.taxon_common.termFormattedDisplayName.name': 'Formatted display name (Leave blank to auto fill)',

  // Option lists
  'option.countries.Ellas': 'Greece',

  // Collection objects
  'record.collectionobject.name': 'Cataloging Record',
  'record.collectionobject.collectionName': 'Cataloging Records',

  'panel.collectionobject.collect': 'Field Collection Information',

  'field.collectionobjects_common.objectNumber.name': 'Accession number',
  'field.collectionobjects_common.fieldCollectionNote.name': 'Habitat information',
  'field.collectionobjects_common.numberOfObjects.name': 'Number of sheets',

  'field.media_common.identificationNumber.name': 'Accession number',
  'field.media_common.type.name': 'Type of media',

  'record.object.name': 'Cataloging Record',
  'record.object.collectionName': 'Cataloging Records',
};
