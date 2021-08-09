const chai = require('chai');
const {assert, expect} = chai;

const check = require('../luhn-algorithm');

describe('#luhn-algorithm', () => {

  it ('should return correct output for correct input', () => {
    const result = check('1615 3107 3127 2413');
    const expected = "1615310731272413 is a valid number";

    assert.equal(result, expected)
  });
  
  it ('should return invalid number for incorrect input', () => {
    const result = check('5647 5767 4737 3858');
    const expected = "5647576747373858 is an invalid number";

    // assert.equal(result, expected);
    expect(result).to.equal(expected);
  });

  it ('show throw an error if the number is longer or smaller than 16 digits', () => {
    const number = "183747392957362543";

    // expect(check(number)).to.throw();
    expect(() => check(number)).to.throw();

  });
});