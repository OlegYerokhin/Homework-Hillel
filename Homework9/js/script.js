alert('Число загадано!');
let tryToGuess;

function playGame() {
    toHideNumber = Math.floor(Math.random() *100);
    return toHideNumber;
}
playGame();

function checkNumber(tryToGuess, numberIsLow, numberIsMuch, success){
    while (toHideNumber != tryToGuess) {
        const tryToGuess = prompt('Попробуй угадать число!','');
        if (!tryToGuess) {
        break
        } else if (tryToGuess < toHideNumber){
        numberIsLow = alert('Мало!');
        }
        else if (tryToGuess > toHideNumber){
        numberIsMuch = alert('Много!');
        } else if (tryToGuess == toHideNumber){
        const success = alert('Успех!');
        const oneMoreGame = confirm('Попробуешь еще раз?');
        if (!oneMoreGame) {
            break
        } else {
            function playGame() {
                toHideNumber = Math.floor(Math.random() *100);
            }
            playGame();

            const tryToGuess = prompt('Попробуй угадать число!','');
            if (!tryToGuess) {
                break
            } else if (tryToGuess < toHideNumber){
            numberIsLow = alert('Мало!');
            } else if (tryToGuess > toHideNumber){
            numberIsMuch = alert('Много!');
            } else if (tryToGuess == toHideNumber){
            const success = alert('Успех!');
            const oneMoreGame = confirm('Попробуешь еще раз?');
                if (!oneMoreGame) {
                    break
                } 
            }
        }
        }
    } 
    return tryToGuess;
};
checkNumber(tryToGuess);
