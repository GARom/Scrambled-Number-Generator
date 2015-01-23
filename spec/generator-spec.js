var sng = require('../generator.js');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('Scrambled-Number-Gerator', function() {
  it('should be defined as a function', function() {
    expect(sng.randomNum).to.be.a('function');
    expect(sng.randomNum).to.be.instanceof(Function);

  });

  it ('should have n numbers specified in scrambled order', function() {
    var result = sng.randomNum(10);

    result.should.be.an('array');
    result.should.have.length(10);
  });
});