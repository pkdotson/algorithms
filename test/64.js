const expect = require('chai').expect;
let solution = require('../solutions/64').solution;
let solution2 = require('../solutions/64').solution2;

describe('reverse word order in a sentence', () => {
  it('should reverse the word order', () => {
    expect(solution('I am the king')).eql('king the am I');
  });
  it('should return I', () => {
    expect(solution('I')).eql('I');
  });
  it.only('should reverse word order', () => {
    expect(solution2('happy goes it')).eql('it goes happy');
    
  }); 
});
