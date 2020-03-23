const array = ['one', 'one', 'three', 'five', 'three', 'five', 'two', 'one', 'seven'];
const obj = {}

for (let element of array) {
    obj[element] = obj[element] +1 || 1
}
console.log(obj);