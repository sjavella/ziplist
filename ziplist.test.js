console.log(10);

function zipList(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    const arrayLengths = (arrayOne.length + arrayTwo.length) / 2;
    const arrayResult = [];
    for (let i = 0; i < arrayLengths; i++) {
      arrayResult.push(arrayOne[i]);
      arrayResult.push(arrayTwo[i]);
    }
    return arrayResult;
  }
  return 0;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheSimpleWay(arrayOne, arrayTwo) {
  return _.union(_.flatten(_.zip(arrayOne, arrayTwo)));
}

console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
