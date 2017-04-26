// Create a function that returns the sum of prime numbers
// Input: [1,2,3,9,8,7]
// Output: 12

const sumOfPrimeNums = (arrPrime) => {
  let sum = 0;
  let primeConfirm = (num)=>{
    if (num === 1){
      return false;
    }
    for (i=2; i<num; i++){
      console.log('i went thru', num);
      if (num%i === 0){
        return false;
      }
    }
    return true;
  };

for (num=0; num<arrPrime.length; num++){
  console.log('i start', num);
      if (primeConfirm(arrPrime[num]) === true || arrPrime[num] === 2){
            console.log('ADDED', arrPrime[num]);
            sum += arrPrime[num];
      }
    }
   return sum;
  };

module.exports = {
  sumOfPrimeNums
};
