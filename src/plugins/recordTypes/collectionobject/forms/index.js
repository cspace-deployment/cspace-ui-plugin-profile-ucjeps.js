import collectorLabelForm from './collectorLabel';
import defaultForm from './default';

export default configContext => ({
  collectorLabel: collectorLabelForm(configContext),
  default: defaultForm(configContext),
  inventory: {
    disabled: true,
  },
  photo: {
    disabled: true,
  },
});
