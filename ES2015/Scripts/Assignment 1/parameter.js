"use strict";
console.log("Extended Parameter Handling");
function add(a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 1; }
    return a + b;
}
console.log(add(6, 5));
console.log(add());
console.log("User Friends");
function userFriends(userName) {
    var friends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        friends[_i - 1] = arguments[_i];
    }
    console.log("userName= ", userName);
    console.log("friends= ", friends);
}
userFriends("Keshari", "Shivam", "abc", "xyz");
console.log("Capital Names");
function printCapitalNames() {
    var array2 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array2[_i] = arguments[_i];
    }
    for (var i in array2) {
        console.log(array2[i].toUpperCase());
    }
}
var array2 = ['Tom', 'Harry', 'Ron', 'Ivan', 'John'];
printCapitalNames.apply(void 0, array2);
console.log('Laptop Model');
var laptopModel = "Asus Vivibook";
var deskNo = 542;
var name2 = "Sam";
var raiseTicket = "Hi Sysnet! There is a system update for laptop model " + laptopModel + ", desk no.: " + deskNo + " of user " + name2;
console.log(raiseTicket);
//# sourceMappingURL=parameter.js.map