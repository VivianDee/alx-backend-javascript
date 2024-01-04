export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (const elem of array) {
    array[array.indexOf(elem)] = appendString + elem;
  }

  return array;
}
