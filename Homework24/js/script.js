// 1

function createRangeFilter(min, max) {
    return function filter(num) {
        if (num >= min && num <= max) {
            return true
        } else {
            return false
        }
    }
}

// 2

// let arr = [
//     {name: 'Igor', age: 22, surname: 'Ivanov', car: 'Volvo', team: 'AC Milan'},
//     {name: 'Stepan', age: 45, surname: 'Stepanov', car: 'Audi', team: 'Tottenham'},
//     {name: 'Anton', age: 31, surname: 'Ivanov', car: 'Audi', team: 'Arsenal'},
//     {name: 'Alex', age: 28, surname: 'Petrov', car: 'Opel', team: 'AC Milan'}
// ];

function createKeyBy(propName) {
    return function keyBy(arr) {
        return (a, b) => a[propName] > b[propName] ? 1 : -1;
    }
  }

// 3

function createCalcPercent(percent) {
    return function calcPercent(value) {
        return value / 100 * percent; 
    }
}
