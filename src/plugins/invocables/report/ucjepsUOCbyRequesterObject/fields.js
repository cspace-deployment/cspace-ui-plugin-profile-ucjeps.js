import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    OptionPickerInput,
    TextInput,
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      Requester: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ucjepsUOCbyRequesterObject.Requester.name',
              defaultMessage: 'Requester',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local,person/shared,organization/local,organization/shared,organization/determination,organization/institution,organization/nomenclature,organization/typeassertion',
              showQuickAdd: false,
            }
          },
        },
      },
      ObjectNumber: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ucjepsUOCbyRequesterObject.ObjectNumber.name',
              defaultMessage: 'Object number',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      OutputMIME: {
        [config]: {
          defaultValue: 'application/pdf',
          messages: defineMessages({
            name: {
              id: 'field.ucjepsUOCbyRequesterObject.OutputMIME.name',
              defaultMessage: 'Output format',
            },
          }),
          required: true,
          view: {
            type: OptionPickerInput,
            props: {
              source: 'uocApprovalStatusMIMETypes',
            },
          },
        },
      },
    },
  };
};
