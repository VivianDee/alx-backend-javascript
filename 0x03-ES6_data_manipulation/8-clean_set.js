export default function cleanSet(inputSet, startString) {
  if (!startString) {
    return '';
  }
  const filteredValues = Array.from(inputSet).filter((value) => value.startsWith(startString));
  const cleanedString = filteredValues.join('-');
  return cleanedString;
}
