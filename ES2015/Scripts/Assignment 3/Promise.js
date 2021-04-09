"use strict";
var x = Promise.resolve(37);
var y = Promise.resolve(21);
Promise.all([x, y]).then(function (values) {
    var sum = values.reduce(function (a, b) { return a + b; });
    console.log(sum);
});
//# sourceMappingURL=Promise.js.map