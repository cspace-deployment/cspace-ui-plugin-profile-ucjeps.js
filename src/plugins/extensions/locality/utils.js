export const isValidDMS = dmsString => (dmsString && !!dmsString.match(/\d/));

/**
 * Code from http://stackoverflow.com/questions/5970961/regular-expression-javascript-convert-degrees-minutes-seconds-to-decimal-degree
 */
export const dmsToDecimal = (dmsString) => {
  if (!isValidDMS(dmsString)) {
    return null;
  }

  const bits = dmsString.match(/[\d.]+/g);
  const sw = /[sw-]/i.test(dmsString);

  let f = sw ? -1 : 1;
  let result = 0;

  for (let i = 0, iLen = bits.length; i < iLen; i += 1) {
    result += bits[i] / f;
    f *= 60;
  }

  return result.toFixed(6);
};

export const computeDecimalLatLong = ({ data }) =>
  data
    .set('decimalLatitude', dmsToDecimal(data.get('vLatitude')))
    .set('decimalLongitude', dmsToDecimal(data.get('vLongitude')));
