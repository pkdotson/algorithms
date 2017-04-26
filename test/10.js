const expect = require('chai').expect;
const SumSolution = require('../solutions/10');
const sumOfPrimeNums = SumSolution.sumOfPrimeNums;

describe('Prime num total', () => {
  it.only('should return sum of prime', () => {
    const arrPrime = [1,2,3,9,8,7];
    const expected = 12;
    expect(sumOfPrimeNums(arrPrime)).to.equal(expected);
  });
});
