
const userName = prompt('Who\'s there?','');

if (userName == 'Borat') {
    const password = prompt('Enter your password!','');
    if (password == 'pamelaanderson') {
        alert('Greetings!');
    } 
    while (password !== 'pamelaanderson') {
        alert('Password is incorrect. Try again!');
        const question = confirm('Would you like to enter your password again?');
            if (!question) {
                break
            } else {
                const password = prompt('Enter your password!','');    
                    if (password == 'pamelaanderson') {
                    alert('Greetings!');
                break
                    }  
            };
        }
} else {
    alert('I don\'t know you!');
}
    
