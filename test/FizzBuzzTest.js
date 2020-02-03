const assert = require('chai').assert;
const FizzBuzz = require('../app/FizzBuzz');

describe ('FizzBuzz test for multiples of 3 and 5, ussing ASSERT interface from Chai module', function () {

    it('return Fizz if the number is divisible for 3', function () {

        const number = 3;
        const fizz = new FizzBuzz;

        const result = fizz.convertNumber(number);

        assert.equal(result, 'Fizz');
    });

    it('return Buzz if the number is divisible for 5', function () {

        const number = 5;
        const buzz = new FizzBuzz;

        const result = buzz.convertNumber(number);

        assert.equal(result, 'Buzz');
    });

    it('return FizzBuzz if the number is divisible for 3 and 5', function () {

        const number = 15;
        const fBuzz = new FizzBuzz;

        const result = fBuzz.convertNumber(number);

        assert.equal(result, 'FizzBuzz');
    });

    it('return the same number if the number isn`t divisible for 3 and 5', function () {

        const number = 7;
        const fBuzz = new FizzBuzz;

        const result = fBuzz.convertNumber(number);

        assert.equal(result, number);
    });

});