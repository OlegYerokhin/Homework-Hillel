// let mainObject = {
//     a: 11,
//     b: 8,
//     c: {
//         x: 5,
//         y: {
//             g: 12,
//             h: 25,
//             i: 'опа-ча!',
//             j: null,
//             },
//     },
// }

// let mainObject = ['Привет', ['эта', 'хрень'], ['вроде', ['работает']]];

function copy(mainObject) {
    let newObject = {} || [];
    let key;
  
    for (key in mainObject) {
      newObject[key] = mainObject[key];
    }
    return newObject;
}
  
// Знаю, это выглядит абсолютной дичью. 