export default function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  inputMap.forEach((quantity, item) => {
    if (quantity === 1) {
      inputMap.set(item, 100);
    }
  });
}
