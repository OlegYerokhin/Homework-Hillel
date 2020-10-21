/////////////////////////////////////////////////////////////////
// 8.1

function pow (number, degree) {
    let result = number;

    for (i = 1; i < degree; i++) {
        result *= number
    }

    return result;
}

const number = prompt('Enter your number','');
const degree = prompt('Enter degree of your number','');

if (degree == 0) {
    alert('Your degree is 0, result is 1');
} else {
    alert(pow(number, degree));
}

/////////////////////////////////////////////////////////////////
// 8.2

function createUser () {
    let firstName = prompt('Enter your first name!','');
    let lastName = prompt('Enter your last name!','');
    let age = prompt('How old are you?','');

    if (firstName === '') {
        firstName = null;
    } else if (lastName === '') {
        lastName = null;
    } else if (age === '') {
        age = null;
    }

    let result = 'First Name: ' + firstName + '\n' + 'Second Name: ' + lastName + '\n' + 'Age: ' +  age;

    return result;
}   
alert(createUser());

/////////////////////////////////////////////////////////////////
// 8.3

function mainFunction () {
    const enterNumber = prompt('Enter your number!','');
    let message;

    if (enterNumber < 100) {
        function lowNumber () {
            message = 'Your number is lower than 100!';
            return message;
        }
        lowNumber();
        
    } else {
        function highNumber () {
            message = 'Your number is over than 100!';
            return message;
        }
        highNumber();
    }
    return message;
}
alert(mainFunction());