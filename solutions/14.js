// finds number in diagnalArray always cubed.
// Phillip Kelley-Dotson

const solution = (array) => {
    let nuArry = [];
    let c = 0;
  for (let i=0; i<array.length; i++){
         nuArry.push(array[i][c]);
          c++;
        }
   return nuArry;
}
         
module.exports = { solution }
