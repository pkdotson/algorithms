const expect = require('chai').expect;
let solution = require('../solutions/14').solution;
// solution = require('../yourSolutionl/14').solution;


describe('Diagnal array', () => {
  it('should return array of numbers diagnal to eatch', () => {
    const array = [[1,2,3],[2,3,4],[3,4,5]];
    const expected = [1,3,5];
    const actual = solution(array);
    expect(solution(array)).eql(expected);
  });
});
