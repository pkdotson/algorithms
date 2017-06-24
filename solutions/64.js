// Manik Sachdeva: msach22
// reverse word order in a sentence
// Input: "I am the king"
// Output: "king the am I"

/**
* @param {string} sentence - string
* @returns {string} newString - reversed string
*/

const reverseInput = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
     newString += string[i];
  };
  return newString;
};

/**
* @param {string} sentence - a sentence
* @returns {string} result - reveresed word order
*/

const solution = (sentence) => {
  if (sentence.length < 2) {
    return sentence;
  }
  let subString = '';
  let result = [];
  for (let j = sentence.length - 1; j >= -1; j--) {
    if (sentence[j] === ' ' || j === -1) {
      result.push(reverseInput(subString));
      subString = '';
    } else {
        subString += sentence[j];
    }
  }
return result.join(' ');
};

const solution2 = (actual) => {
  let splitArr = actual.split(' ');
  for (let i=0; i<splitArr.length/2; i++) {
      let temp = splitArr[i];
      splitArr[i] = splitArr[splitArr.length-i-1];
      splitArr[splitArr.length-i-1] = temp;
          }
    actual = splitArr.join(' ');
    return actual;
};
module.exports = {
  solution, solution2,
};
