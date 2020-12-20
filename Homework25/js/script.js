// 1.1

const string = 'Is it works?';
String.prototype.reverse = function {
    return this.split('').reverse().join('');
}

// 1.2

const array = ['2', '5', '1', '9', '3', '6', '4', '8', '7'];

Array.prototype.sorted = Array.prototype.sort;

Array.prototype.sort = function() {
    let arr = [...this];
    return arr.sorted();
}

// 1.3

NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.reduce = Array.prototype.reduce;
NodeList.prototype.find = Array.prototype.find;

