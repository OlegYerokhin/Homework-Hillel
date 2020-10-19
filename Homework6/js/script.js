const n = prompt('Введи порядковый номер числа Фибоначчи')

function fibonacci(n) {
    let a = 1;
    let b = 1;
    for (i = 3; i <= n; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return(b);
}

alert(fibonacci(n))