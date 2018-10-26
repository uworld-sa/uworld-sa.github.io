let obj = new MyObject("hi","this", "is", "array");

console.log('Создадим обьект (задание со звездочкой) let obj = new MyObject("hi","this", "is", "array") ', obj);
console.log('Геттер длины obj.length =',obj.length);
console.log('Метод obj.push("push") ', obj.push('push'));
console.log('Новый массив ',obj);
console.log('Метод obj.pop() ',obj.pop());
console.log('Новый массив ',obj);
console.log('Метод join пустой параметр ',obj.join());
console.log('Метод join - ',obj.join('-'));
console.log('Метод obj.filter(function(el) {return el.length > 2}) ',obj.filter(function(el) {return el.length > 2}));
console.log('Метод obj.find(function(el) {return el.length > 2}) ',obj.find(function(el) {return el.length > 2}));
console.log('Метод obj.map(function(el){return el.length}) ',obj.map(function(el){return el.length}));
console.log('Метод obj.sort() пустой ',obj.sort());
let temp = obj.sort(function(a,b){
	if (a.length < b.length) 
		return -1;
	if (a.length > b.length)
		return 1;
	return 0;
});
console.log('Метод сортирует по длине строки obj.sort(function(a,b){if (a.length < b.length) return -1; if (a.length > b.length) return 1; return 0;}) ', temp);

console.log('Метод toString ',obj.toString());