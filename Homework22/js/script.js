// 1.1 - Фибоначчи циклом

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

// 1.2 - Фибоначчи рекурсией

function countFibonacci(n) {
    return n <= 1 ? n : countFibonacci(n - 1) + countFibonacci(n - 2);
  }

// 2.1 - Факториал циклом

function factorial(n){
    let result = 1;
    while(n){
        result *= n--;
    }
    return result;
}


// 2.2 - Факториал рекурсией

function countFactorial(n) {
    return (n != 1) ? n * countFactorial(n - 1) : 1;
  }

