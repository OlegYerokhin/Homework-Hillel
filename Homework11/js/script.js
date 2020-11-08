const obj = {
    "0": "zero",
    "42": "answer",
    "greeting": "Hello",
    "3.14": "PI"
}

function returningValue(value) {
    for(let key in value) {
        if(!isNaN(parseInt(key))) {
             console.log(obj[key]);
        } else if(!isNaN(parseInt(key[radix=2]))){
            console.log(obj[key]);
       }
    }
}
returningValue(obj)
