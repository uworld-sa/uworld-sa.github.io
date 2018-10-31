Number.prototype.sum = function (y) {
    return this.valueOf() + y;
};

let x = 5
console.log('Метод sum() x = 5, x.sum(6) = ', x.sum(6));