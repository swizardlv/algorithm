var arguments = process.argv.splice(2);
var inputString = arguments[0];


function full_permutation(str) {
    console.log(str);
}

full_permutation(inputString);



function permute(permutation) {
  var length = permutation.length,
      result = new Array([0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600][length]),
      c = new Array(length).fill(0),
      i = 1,
      j = 1;

  result[0] = permutation.slice();
  while (i < length) {
    if (c[i] < i) {
      var k = (i % 2) ? c[i] : 0,
          p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result[j] = permutation.slice();
      ++j;
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

console.log(permute(['a','b','c','d','e','f','g','h','i','j']));
