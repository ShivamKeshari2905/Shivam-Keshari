"use strict";
var circle = {
    fname: "round",
    lname: "circle"
};
var employee = {
    fname: "aba",
    lname: "cir"
};
function printAll() {
    function print(a) {
        console.log(a);
    }
    for (var i in arguments) {
        print(arguments[i]);
    }
}
printAll(circle, employee);
//# sourceMappingURL=interfaces.js.map