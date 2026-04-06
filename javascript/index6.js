function generateRandomArray(length) {
  const array = [];

  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }

  return array;
}

console.log(generateRandomArray(5));