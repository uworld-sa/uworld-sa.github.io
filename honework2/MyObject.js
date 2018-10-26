function MyObject() {
	for (let key in arguments) {
		this[key] = arguments[key];
	}
}

// prototype pop
MyObject.prototype.push = function (el) {
	this[this.length] = el;
	return this.length - 1;
};

// prototype push
MyObject.prototype.pop = function () {
	let length = this.length;
	let el = this[length - 1]
	if (length == 0) {
		return undefined;
	}
	delete this[length - 1];
	return el;
};

// prototype join
MyObject.prototype.join = function (separate = ',') {
	let length = this.length;
	let join = '';
	if (length == 0) {
		return join;
	}
	join += this[0];
	for (let i = 1; i < length; i++) {
		join +=  separate + this[i];
	}
	return join;
};

// prototype filter
MyObject.prototype.filter = function (f) {
	let arr = new MyObject();
	for (let i = 0; i < this.length; i++) {
		if (f(this[i])) {
			arr.push(this[i])
		}
	} 
	return arr;
};

// prototype find
MyObject.prototype.find = function (f) {
	for (let i = 0; i < this.length; i++) {
		if (f(this[i])) {
			return this[i]
		}
	} 
};

// prototype map
MyObject.prototype.map = function (f) {
	let arr = new MyObject();
	for (let i = 0; i < this.length; i++) {
		arr.push(f(this[i]));
	} 
	return arr;
};

// prototype sort
MyObject.prototype.sort = function (f) {

	if (typeof f === 'undefined') {
		for (let j = 0; j < this.length; j++) {
			for (let i = 0; i < this.length - j; i++) {
				if (this[i] > this[i + 1]) {
					let tmp = this[i];
					this[i] = this[i + 1];
					this[i + 1] = tmp;
				}
			}
		}
	} else {
		for (let j = 0; j < this.length; j++) {
			for (let i = 0; i < this.length - j - 1; i++) {
				if (f(this[i],this[i +1]) >= 0) {
					let tmp = this[i];
					this[i] = this[i + 1];
					this[i + 1] = tmp;
				} 
			}
		}
	}
	return this;
};

// prototype join
MyObject.prototype.toString = function () {
    let length = this.length;
    let string = '';
    if (length == 0) {
        return string;
    }
    string += '0:' + this[0];
    for (let i = 1; i < length; i++) {
        string +=  ',' +i + ':' + this[i];
    }
    return string;
};

Object.defineProperty(MyObject.prototype, "length", {
	enumerable: false,
	get: function() { 
		let count = 0;
		for(let key in this) {
			if (this.hasOwnProperty(key)) {
				count++
			}
		}
		return count; 
	}
});