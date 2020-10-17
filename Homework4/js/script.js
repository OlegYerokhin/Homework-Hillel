///////////////////////////////////////////////////
// 4.1


let doesWantBeer = confirm('Do you want to drink beer?');

if (doesWantBeer) {
  beerMessage1 = 'You are not allowed to drink beer here!!';
} else {
  beerMessage1 = 'What is wrong with you?!!';
}

const beerProposition = doesWantBeer ? 'You are not allowed to drink beer here!' : 'What is wrong with you?!!';

alert(beerProposition);


///////////////////////////////////////////////////
// 4.2.1

let age = prompt('How old are you?','');

if (age <18) {
    ageMessage1 = 'You are not allowed to be here!';
} else if (age >30) {
    ageMessage1 = 'Greetings, citizen!';
} else {
    ageMessage1 = 'What\'s up, bro?';
}

alert(ageMessage1);


///////////////////////////////////////////////////
// 4.2.2

let legalAge = prompt('How old are you?','');

const ageMessage = (legalAge < 18) ? ('You are not allowed to be here!') : (legalAge > 30 ? 'Greetings, citizen!' : 'What\'s up, bro?');

alert(ageMessage);

///////////////////////////////////////////////////
// 4.3.1
const drinkTea = confirm('Tea or coffee?');
const addSugar = confirm('Do you want to add some sugar to your drink?');

const message1 = drinkTea && addSugar ?
    'Here is your tea with sugar' :
    drinkTea  ?
        'Here is your tea without sugar' :
         addSugar ?
            'Here is your coffee with sugar' :
            'Here is your coffee without sugar'; 

alert(message1);

//////////////////////////////////////////////////
// 4.3.2

const isTea = confirm('Tea or coffee?');
const withSugar = confirm('Do you want to add some sugar to your drink?');

let message2;

if (isTea && withSugar) {
    message2 = 'Here is your tea with sugar';
} else if (isTea) {
    message2 = 'Here is your tea without sugar';
} else if (withSugar) {
    message2 = 'Here is your coffee with sugar';
} else {
    message2 = 'Here is your coffee without sugar';
}

alert(message2);

