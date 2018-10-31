'use strict';

/**
 * Числа Фиббоначи
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765
 * https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * Знайти суму перших n чисел фібоначі.
 */

var fibonacciTests = [
    {
        parameters: [1],
        expectedResult: 1
    },
    {
        parameters: [3],
        expectedResult: 4
    },
    {
        parameters: [5],
        expectedResult: 12
    },
    {
        parameters: [20],
        expectedResult: 17710
    },
    {
        parameters: [0],
        expectedResult: 0
    }
];


function fibonacci(n) {
    //TODO
    if (n < 2) {
        return n;
    }
    let a = 1;
    let b = 1;
    let c = 0;
    let sum = 2;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
        sum = sum + c;
    }
    return sum
}


tasks.push({
    title: "Числа Фиббоначи",
    solution: fibonacci,
    tests: fibonacciTests
});