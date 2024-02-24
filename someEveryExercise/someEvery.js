function hasOddNumber(arr) {
    return arr.some(num => num %2 !== 0);
}
function hasAZero(num) {
    return num.toString().includes('0');
  }


  function hasOnlyOddNumbers(arr) {
    return arr.every(num => num % 2 !== 0);
  }


  function hasNoDuplicates(arr) {
    return arr.every((value, index) => arr.indexOf(value) === index);
  }

  function hasCertainKey(arrOfObjects, key) {
    return arrOfObjects.every(obj => obj.hasOwnProperty(key));
  }


  function hasCertainValue(arrOfObjects, key, value) {
    return arrOfObjects.every(obj => obj[key] === value);
  }