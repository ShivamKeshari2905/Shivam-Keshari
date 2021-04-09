"use strict";
console.log("Chatroom using set and map");
var chatroom1 = new Map();
chatroom1.set('c11', 'Hello World!');
chatroom1.set('c12', 'Hello there!');
chatroom1.set('c13', 'C13 here');
console.log(chatroom1);
var chatroom2 = new Map();
chatroom2.set('c21', 'Are you there?');
chatroom2.set('c22', 'Connecting...');
chatroom2.set('c23', 'Good morning');
console.log(chatroom2);
function users(chatroom_name) {
    chatroom_name.forEach(function (value, key) {
        console.log("" + key);
    });
}
function messages(chatroom_name) {
    chatroom_name.forEach(function (value, key) {
        console.log("" + value);
    });
}
users(chatroom1);
messages(chatroom1);
users(chatroom2);
messages(chatroom2);
//# sourceMappingURL=collection.js.map