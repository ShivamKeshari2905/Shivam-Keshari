console.log("Arrow Function");
let names=['Tom', 'Evan', 'Jerry'];
const objectArray = names.map((str) => ({ name: str, length: str.length }))
console.log(objectArray);
