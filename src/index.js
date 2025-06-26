/* global cspaceUIPluginProfileUCJEPS */
/* The cspaceUIPluginProfileUCJEPS global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import cspaceUIPluginExtUCBNHCollectionObject from 'cspace-ui-plugin-ext-ucbnh-collectionobject';
import cspaceUIPluginExtUCBNHLoanIn from 'cspace-ui-plugin-ext-ucbnh-loanin';
import cspaceUIPluginExtUCBNHLoanOut from 'cspace-ui-plugin-ext-ucbnh-loanout';
import cspaceUIPluginExtUCBNHOrganization from 'cspace-ui-plugin-ext-ucbnh-organization';
import cspaceUIPluginExtUCBNHTaxon from 'cspace-ui-plugin-ext-ucbnh-taxon';
import cspaceUIPluginRecordTaxon from 'cspace-ui-plugin-record-taxon';
import annotationExtensionPlugin from 'cspace-ui-plugin-ext-annotation';
import logo from '../images/logo.png';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/ucjeps.css';

export default () => ({
  logo,
  messages,
  className: styles.common,
  defaultDropdownFilter: 'prefix',
  prettyUrls: true,
  relationMemberPerm: 'R',
  tenantId: '20',
  recordTypes: {
    consultation: {
      disabled: true,
    },
    deaccession: {
      disabled: true,
    },
    dutyofcare: {
      disabled: true,
    },
    exit: {
      disabled: true,
    },
    heldintrust: {
      disabled: true,
    },
    nagprainventory: {
      disabled: true,
    },
    repatriationrequest: {
      disabled: true,
    },
    restrictedmedia: {
      disabled: true,
    },
    summarydocumentation: {
      disabled: true,
    },
  },
  pluginInfo: {
    cspaceUIPluginProfileUCJEPS: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileUCJEPS.name',
          defaultMessage: 'University and Jepson Herbaria profile',
        },
      }),
      version: cspaceUIPluginProfileUCJEPS.packageVersion,
    },
  },
  plugins: [
    cspaceUIPluginRecordTaxon(),
    cspaceUIPluginExtUCBNHCollectionObject(),
    cspaceUIPluginExtUCBNHLoanIn(),
    cspaceUIPluginExtUCBNHLoanOut(),
    cspaceUIPluginExtUCBNHOrganization(),
    cspaceUIPluginExtUCBNHTaxon(),
    annotationExtensionPlugin(),
    ...plugins.map((plugin) => plugin()),
  ],
});
