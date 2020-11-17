/////////////////////////////////////////////////////
// 1.1

const array = [1, 2, 3, 4, 5];

const sum = array.reduce((result, elem) => result + elem, 0);

console.log(sum);

/////////////////////////////////////////////////////
// 1.2

const array = [1, 2, 3, 4, 5];

function arraySum(array) {
    let sum = 0;
    for(i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
arraySum(array);

/////////////////////////////////////////////////////
// 2.1


function mapToUpperCase(arr) {

    let upperCasedArr = arr.map((elem) => {
        
        return elem.toUpperCase();
    });

    return upperCasedArr;
};

console.log(mapToUpperCase(['one', 'two', 'three', 'four', 'five']))
/////////////////////////////////////////////////////
// 2.2

function mapToUpperCase(arr) {
    let result = [];

    for(let elem of arr) {
        result.push(elem.toUpperCase());
    }

    return result;
}