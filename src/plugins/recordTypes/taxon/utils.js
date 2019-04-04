export const computeTermFormattedDisplayName = ({ data }) => {
  const displayName = data.get('displayName');

  return data.set('termFormattedDisplayName', displayName);
};

export default computeTermFormattedDisplayName;
