let  data =  [2,3,5,7,11,13,17,19,23,29];

console.log('Массив из простых чисел', data);

console.log('\nМетод data.pop() удаляет последний елемент масива и возвращает его:', data.pop());

console.log('\nМетод data.push(29) добавляет елемент в конец массива и возвращает позицию начиная с 1, позиция', data.push(29));
console.log('Новый масив', data);

let data2 = data.concat(31, 37, 41);

console.log('\nМетод data.concat(31, 37, 41) создаёт новый массив, в который копируются элементы из data и доюавляет новые = ', data2);

data2 = data.concat([31, 37], 41);
console.log('Есть особенность если в concat есть масив он его тоже добавит например data.concat([31, 37], 41) = ', data2);

console.log('\nМетод data.indexOf(11) возвращает номер элемента в массиве или -1, если его нет = ', data.indexOf(11));
console.log('А вот при поиске data.indexOf(10)  = ', data.indexOf(10));

console.log('\nМетод data.join(",") берет массив и склеивает его в строку, используя переданное значение как разделитель  = ', data.join(","));

console.log('\nМетод forEach используется для перебора массива');
data.forEach(function(item, i, data) {
    console.log( "№ " + i + ": " + item + " (массив:" + data + ")" );
});

var filterData = data.filter(function(number) {
    return number > 10;
});
console.log('\nМетод filter используется для фильтрации массива через функцию и вернет только те значения которые пройдут условие');
console.log('Вернем значения все что больше 10: ', filterData);

function search(element, index, array) {
    return element > 10 && element < 20;
}

console.log('\nМетод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined');
console.log('Ищем елемент больше 10 и меньше 20 = ', data.find(search));

console.log('\nМетод map()  используется для трансформации массива. Будет создан новый массив');
data2 =  data.map(function(number) {
    return number + 1;
});
console.log('Каждому елементу массива добавим 1 = ', data2);

console.log('\nМетод slice(begin, end) копирует участок массива от begin до end, не включая end. Исходный массив при этом не меняется. Нумерация идет с 0');
console.log('Пример data.slice(1, 5) =', data.slice(1, 5));

data2 = [].concat(data);
data2 = data2.splice(0,2);
console.log('\nМетод splice() универсальная функция, которая умеет удалять, добавлять или заменять елементы.');
console.log('Метод data2 = data.splice(0,2) удалим первые два елемента и полуим их = ', data2);

data2 = [].concat(data);
data2.splice(0,2)
console.log('Метод data.splice(0,2) удалим первые два елемента = ', data2);

data2 = [].concat(data);
data2.splice(0,2,1,4);
console.log('Метод data.splice(0,2,1,4) удалим первые два елемента и заменим на 1 и 4 = ', data2);

data2 = [].concat(data);
data2.splice(2,0,4);
console.log('Метод data.splice(0,2,4) добавим 4 = ', data2);

console.log('\nМетод data.shift() удаляет первый елемент масива и возвращает его:', data.shift());

console.log('\nМетод data.unshift(1,2) добавляет один или более элементов в начало массива и и возвращает новую длинну масива', data.unshift(1,2));
console.log('Новый масив', data);

