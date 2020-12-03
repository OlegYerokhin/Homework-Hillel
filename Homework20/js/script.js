// Получаем таблицу
const tBody = document.getElementById('tbody');
const initialData = getInitialData();

// Собственн, функция, которая сортирует и рендерит данные.
function sortTable(index) {
    const sortedData = sortTableDataByColumnIndex(initialData, index);

    renderTable(sortedData);
}

function getInitialData() {
    // Получаем массив строк из tBody
    const data = [...tBody.querySelectorAll('tr')]
        .map((row) => [...row.querySelectorAll('td')]
            .map(({innerHTML}) => isNaN(innerHTML) ? innerHTML : +innerHTML)
        );
    return data;
}

// Функция, сортирующая массив. Data - данные, полученные из getInitialData, index - индекс колонок таблицы
function sortTableDataByColumnIndex(data, index) {
    // sort - мутирующий, поэтому нужно сделать поверхностную копию
    return [...data].sort((rowA, rowB) => {
        const valueA = rowA[index];
        const valueB = rowB[index];
        
        return typeof valueA === 'number' ? 
            valueA - valueB :
            valueA.localeCompare(valueB);
            //localeCompare сравнивает строки в случае, если приходят строки, а не числа
    });
}

// Функция, которая рендерит таблицу
function renderTable(data) {
    // Собираем таблицу
    const html = data.map((row) => `
        <tr>
            ${row.map((value) => `<td>${value}</td>`).join('')}
        </tr>
    `).join('');
    // Собрали ячейки, получили значения

    tBody.innerHTML = html;
    // Собрали разметку таблицы

}