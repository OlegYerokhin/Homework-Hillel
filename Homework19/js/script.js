//1

document.getElementById('container');
document.querySelector('#container');

//2

document.querySelectorAll('.second');

//3

document.querySelectorAll('ol > li.second');

//4
const headerGreeting = document.querySelector('.header');
headerGreeting.innerHTML = 'Hello!';

//5

const newFooterClass = document.querySelector('.footer');
newFooterClass.classList.add('main');
newFooterClass.classList.remove('main');

//6

const newList = document.createElement('li');
newList.innerHTML = 'Four';

//7

const ulElem = document.querySelector('ul');
ulElem.append(newList);

//8

const olStyle = document.querySelectorAll('ol > li');

for (i = 0; i < olStyle.length; i++) {
    olStyle[i].style.backgroundColor = '#00FF00';
}

//9

const deletingFooter = document.querySelector(".footer");
deletingFooter.remove();

