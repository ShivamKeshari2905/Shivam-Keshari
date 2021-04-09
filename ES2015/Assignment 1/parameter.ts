console.log("Extended Parameter Handling");
function add(a=1, b = 1) {
     return a + b; 
}
console.log(add(6,5));
console.log(add());

console.log("User Friends");

function userFriends(userName, ...friends){
        console.log("userName= ", userName);
        console.log("friends= ", friends)
}
userFriends("Keshari","Shivam","abc","xyz")

console.log("Capital Names")

function printCapitalNames(...array2:any[]){
    for(let i in array2){
        console.log(array2[i].toUpperCase());
    }
}


let array2=['Tom','Harry','Ron','Ivan','John'];
printCapitalNames(...array2);

console.log('Laptop Model');
let laptopModel= "Asus Vivibook";
let deskNo= 542;
let name2= "Sam";

let raiseTicket=`Hi Sysnet! There is a system update for laptop model ${laptopModel}, desk no.: ${deskNo} of user ${name2}`;
console.log(raiseTicket);
