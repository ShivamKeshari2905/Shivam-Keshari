interface Printable{
    fname : string,
    lname : string
}

let circle:Printable = {
    fname: "round",
    lname: "circle"
}

let employee:Printable = {
    fname: "aba",
    lname: "cir"
}

function printAll() {
    function print(a){
        console.log(a);
    }
    
    for(var i in arguments){
      print(arguments[i]);
    }
  }

printAll(circle, employee);
