console.log("stringshortstring");
function padChars(number, c){
    var str = ""
    while(number > 0){
        str += c
        number --
    }
    console.log(str)
}
padChars(5, 'x')
padChars(7, '-')