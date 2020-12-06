const data = document.querySelector('.entered-data')
const ol = document.body.querySelector('ol')
const deleteBtn = document.querySelector('.delete-btn');
deleteBtn.addEventListener('click', deleteOnClick);

// Функция, добавляющая строку в список
form.onsubmit = function() {
    if (data.value === '') {
    return false
    };
    const li = document.createElement('li');
    li.textContent = data.value;
    ol.appendChild(li);
    li.classList.add('new');
    form.reset();
    return false;
};

// Функция, делающая таргетирование на элементе li
ol.onclick = function (event) {
	let target = event.target;
    if (target.tagName != 'LI') return;
    chosen(target);
};

let selectedLi;

// Функция, добавляющая/удаляющая класс "focused"
function chosen(li) {
    if (selectedLi) {
        selectedLi.classList.remove('focused');
    }
    selectedLi = li;
    selectedLi.classList.add('focused');
}

// Функция, удаляющая выделенный элемент принажатии на "-"
function deleteOnClick() {
    // Состояние focused как показатель элемента, который нужно удалить при клике на "-". Если нет выделенного элемента, удаляет последний элемент списка.
    document.querySelector('.focused') ? document.querySelector('.focused').remove() : document.querySelector('ol').lastElementChild.remove()
};