import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    OptionPickerInput,
    TermPickerInput,
    DateInput,
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
      OutputMIME: {
        [config]: {
          defaultValue: 'application/pdf',
          messages: defineMessages({
            name: {
              id: 'field.report.ucjepsUOCApprovalStatus.OutputMIME.name',
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
      Requester: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucjepsUOCApprovalStatus.Requester.name',
              defaultMessage: 'Requester',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      AuthBy: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucjepsUOCApprovalStatus.AuthBy.name',
              defaultMessage: 'Authorized by',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local,person/shared,person/ulan,organization/local,organization/shared,organization/collective,organization/ulan',
            },
          },
        },
      },
      AuthStatus: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucjepsUOCApprovalStatus.AuthStatus.name',
              defaultMessage: 'Authorization status',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'uocauthorizationstatuses',
            },
          },
        },
      },
      StartDate: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucjepsUOCApprovalStatus.StartDate.name',
              defaultMessage: 'Start date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
      EndDate: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.ucjepsUOCApprovalStatus.EndDate.name',
              defaultMessage: 'End date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
    },
  };
};
