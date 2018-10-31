'use strict';

/**
 * cAPS lOCK
 *
 * зАЧЕМ НУЖНА КЛАВИША cAPS lOCK?
 * Caps Lock — клавиша компьютерной клавиатуры, предназначенная для автоматической (постоянной) смены регистра
 * букв со строчных на прописные. Будучи случайно нажатой, она приводит к последствиям вроде первого абзаца в
 * условии этой задачи.
 *
 * Будем считать, что слово набрано с ошибочно нажатой клавишей Caps Lock, если:
 * - либо оно полностью состоит из прописных букв;
 * - либо прописными являются все его буквы, кроме первой.
 *
 * В таком случае, нужно автоматически поменять регистр всех букв на противоположный. Например,
 * регистр букв слов «hELLO», «HTTP», «z» должен быть изменен.
 * Напишите программу, которая применяет описанное выше правило или оставляет слово без изменения, если оно не применимо.
 *
 * Входные данные
 * записано слово, состоящее из прописных или строчных букв латинского алфавита. Длина слова — от 1 до 100 символов включительно.
 *
 * Выходные данные
 * Выведите результат обработки данного слова.
 */

var capsLockTests = [
    {
        parameters: ["cAPS"],
        expectedResult: "Caps"
    },
    {
        parameters: ["Lock"],
        expectedResult: "Lock"
    },
    {
        parameters: ["wHY DO wE NEED cAPS lOCK?"],
        expectedResult: "Why do We need Caps Lock?"
    },
    {
        parameters: ["FuNkY iS nOt CaPs!"],
        expectedResult: "FuNkY Is nOt CaPs!"
    }
];


function capsLock(str) {
    let arr = str.split(' ');
    let arr1 = str.toUpperCase().split(' ');
    let response = [];
    for (let i = 0; i < arr.length; i++) {
        let countFail = 0;
        let smallfirst = false;
        for (let j = 0; j < arr[i].length; j++) {
            if (j == 0 && arr[i][j] != arr[i][j].toUpperCase()) {
                smallfirst = true;
            } else if (arr[i][j] == arr1[i][j]) {
                countFail++;
            }
        }
        if (smallfirst == true && countFail == arr[i].length -1){
            response.push(arr1[i].charAt(0).toUpperCase() + arr1[i].toLowerCase().slice(1));
        } else if (countFail == arr[i].length) {
            response.push(arr1[i].toLowerCase());
        } else if (countFail == arr[i].length - 1) {
            response.push(arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1));
        } else {
            response.push(arr[i]);
        }
    }
    return response.join(' ');
}


tasks.push({
    title: "cAPS lOCK",
    solution: capsLock,
    tests: capsLockTests
});
