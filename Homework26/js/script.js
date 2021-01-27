// 1

class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

// 2

class Animal {
    constructor(legs) {
    this.legs = legs;
    }

    stomach = [];

    eat(food) {
        this.stomach.push(food)
    }
}

// 3

class Rabbit extends Animal {
    constructor(legs, breed) {
        super(legs);
        this.breed = breed;
    };

    eat(food) {
        if(food instanceof Vegetable) {
            this.stomach.push(food);
        } else {
            throw new Error('Кролик такого не ест!');
        }
    };

    jump() {
        console.log('Кролик прыгает');
    };
}

// 4

class Snake extends Animal {
    constructor(legs, isPoisonous) {
        super(legs);
        this.isPoisonous = isPoisonous;
    };

    eat(food) {
        if(food instanceof Rabbit) {
            this.stomach.push(food);
        } else {
            throw new Error('Змея такого не ест!')
        }
    }

    crawl() {
        console.log('Змея ползет');
    }
}

// 5

class Human extends Animal {
    constructor(legs, firstName, lastName) {
        super(legs);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(food) {
        if (food instanceof Vegetable || food instanceof Rabbit || food instanceof Snake) {
            this.stomach.push(food);
        } else {
            throw new Error('Зевс покарает тебя!')
        }
    }

    walk() {
        console.log('Человек идет пить пиво');
    }

    greet() {
        console.log('Однако здравствуйте!');
    }
}