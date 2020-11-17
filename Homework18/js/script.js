///////////////////////////////////////////
// 1

function capitalize(string) {
    const splitted = string.split(' ');
    const words = splitted.map((word) => {
        return word[0].toUpperCase()+word.slice(1);
    });
    return words.join(' ');
}


///////////////////////////////////////////
// 2

function checkSubstring(string, substring) {
    return string.toLowerCase().includes(substring.toLowerCase());
}