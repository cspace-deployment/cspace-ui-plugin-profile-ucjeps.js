import collectorLabelForm from './collectorLabel';
import defaultForm from './default';
import studentForm from '/.studentForm';

export default configContext => ({
  collectorLabel: collectorLabelForm(configContext),
  default: defaultForm(configContext),
  student: studentForm(configContext),
  inventory: {
    disabled: true,
  },
  photo: {
    disabled: true,
  },
});
