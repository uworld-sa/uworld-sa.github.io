'use strict';

/**
 * Drazil and Factorial
 *
 * Drazil is playing a math game with Varda.
 * Let's define F(x) for positive integer x as a product of factorials of its digits.
 * For example, F(135) = 1! * 3! * 5! = 720
 *
 * First, they choose a decimal number a consisting of n digits that contains at least one digit larger than 1.
 * This number may possibly start with leading zeroes. Then they should find maximum positive number x satisfying
 * following two conditions:
 *
 * 1. x doesn't contain neither digit 0 nor digit 1.
 * 2. F(x) = F(a).
 * Help friends find such number.
 *
 * Input
 * One string input parameter length <= 15. There is at least one digit in a that is larger than 1.
 * Number a may possibly contain leading zeroes.
 *
 * Output
 * Output a maximum possible integer satisfying the conditions above.
 * There should be no zeroes and ones in this number decimal representation.
 */

var drazilTest = [
    {
        parameters: ["1234"],
        expectedResult: 33222
    },
    {
        parameters: ["555"],
        expectedResult: 555
    }
];
/**
 * In the first case, F(1234) = 1! * 2! * 3! * 4! = F(33222)
 */
    

function drazil(boys, girls) {
    let numbers = []
    for (let i = 0; i < boys.length; i++) {
        if (boys[i] == 2) {
            numbers.push(2);
        }
        if (boys[i] == 3) {
            numbers.push(3);
        }
        if (boys[i] == 4) {
            numbers.push(3);
            numbers.push(2);
            numbers.push(2);
        }
        if (boys[i] == 5) {
            numbers.push(5);
        }
        if (boys[i] == 6) {
            numbers.push(5);
            numbers.push(3);
        }
        if (boys[i] == 7) {
            numbers.push(7);
        }
        if (boys[i] == 8) {
            numbers.push(7);
            numbers.push(2);
            numbers.push(2);
            numbers.push(2);
        }
        if (boys[i] == 9) {
            numbers.push(7);
            numbers.push(2);
            numbers.push(3);
            numbers.push(3);
        }
    }
    let arr = numbers.sort(function(a, b) {return b - a;});
    arr = arr.join('');

    return parseInt(arr);
}


tasks.push({
    title: "Drazil and Factorial",
    solution: drazil,
    tests: drazilTest
});
