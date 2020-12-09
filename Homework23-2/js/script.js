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
  if(typeof mainObject !== 'object' || mainObject === null) {
    return mainObject;
  } else if (Array.isArray(mainObject)) {
    return mainObject.map((item) => copy(item))
  }

    let newObject = {};
  
    for (let key in mainObject) {
      newObject[key] = copy(mainObject[key]);
    }
    return newObject;
}
  
