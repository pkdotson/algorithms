// Phillip Kelley-Dotson 
// Arrange numbers and strings into ascending order.

const solution3 = (actual) => {
 if(/^[a-zA-Z]+$/.test(actual[0]) === true){  actual.sort();
    return actual;
   } else {
     actual.sort(function (a,b){
      return a-b;
     });
     return actual;
    }
  };



module.exports = {
  solution3,
};
