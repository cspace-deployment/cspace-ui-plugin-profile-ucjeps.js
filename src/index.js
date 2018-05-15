/* global cspaceUIPluginProfileUCJeps */
/* The cspaceUIPluginProfileUCJeps global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import cspaceUIPluginExtUCBNHOrganization from 'cspace-ui-plugin-ext-ucbnh-organization';
import logo from '../images/logo.png';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/ucjeps.css';

module.exports = () => ({
  logo,
  messages,
  className: styles.common,
  prettyUrls: true,
  relationMemberPerm: 'R',
  tenantId: '20',
  pluginInfo: {
    cspaceUIPluginProfileUCJeps: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileUCJeps.name',
          defaultMessage: 'University and Jepson Herbaria profile',
        },
      }),
      version: cspaceUIPluginProfileUCJeps.packageVersion,
    },
  },
  plugins: [
    cspaceUIPluginExtUCBNHOrganization(),
    ...plugins.map(plugin => plugin()),
  ],
});
