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

let firstName = prompt('Enter your first name!','');
let lastName = prompt('Enter your last name!','');
let age = prompt('How old are you?','');
let functionResult;

function createUser () {

    if (firstName === '' || undefined) {
        firstName = null;
    } else if (lastName === '' || undefined) {
        lastName = null;
    } else if (age === '' || undefined) {
        age = null;
    }

    return functionResult;
}   
(createUser({functionResult}));

/////////////////////////////////////////////////////////////////
// 8.3.1

function lowNumber (enteredNumber) {
    alert('Too low!')
};
function highNumber (enteredNumber) {
    alert('Too much!')
};
function mainFunction (enteredNumber, lowNumber, highNumber) {
    if (enteredNumber < 100) {
        
        lowNumber();
    } else if (enteredNumber > 100) {
        
        highNumber();
    }
}

mainFunction();
let enteredNumber = prompt('Enter your number!','');

mainFunction(enteredNumber, lowNumber, highNumber);

/////////////////////////////////////////////////////////////////
// 8.3.2

function mainFunction(enteredNumber, lowNumber, highNumber) {
    if (enteredNumber < 100) {
        
        lowNumber();
    } else if (enteredNumber > 100) {
        
        highNumber();
    }
  
}

let enteredNumber = prompt('Enter your number!','');

mainFunction(enteredNumber, 
    function(enteredNumber) {
        alert('Too low!')
    },
    function(enteredNumber) {
        alert('Too much!')
    },
)

mainFunction(enteredNumber, lowNumber, highNumber);
