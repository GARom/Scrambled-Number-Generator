var sng = require('../generator.js');

describe("Scrambled Number Generator", function() {
  it("should be defined as a function", function() {
    expect( sng.randomNum ).toBeDefined();
  });

  it("should have 1000 numbers", function() {
    expect( sng.randomNum(1000).length).toBe(1000);   
  });

  it("should have n numbers specified in scrambled order", function() {
    var firstTest = sng.randomNum(1000);
    var secondTest = sng.randomNum(1000);
    expect(firstTest).not.toEqual(secondTest);
  });


})