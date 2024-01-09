export default function hasValuesFromArray(set, arr) {
  return arr.reduce((result, elem) => set.has(elem), 0);
}
