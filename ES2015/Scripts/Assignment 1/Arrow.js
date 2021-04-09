"use strict";
console.log("Arrow Function");
var names = ['Tom', 'Evan', 'Jerry'];
var objectArray = names.map(function (str) { return ({ name: str, length: str.length }); });
console.log(objectArray);
//# sourceMappingURL=Arrow.js.map