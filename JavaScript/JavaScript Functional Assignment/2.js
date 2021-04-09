function square(x){
    return x*x;
}
function double(x){
    return x*2
}
function compose(){
    a=arguments[0]
    b=arguments[1]
    return function(x){
        return a(b(x))
    }
}
function Assign2(){
    var f1 = compose(square, double)
    var x = document.getElementById("input2").value
    document.getElementById("f1").innerHTML="f1= " + f1(x)

    var f2 = compose(double, square)
    document.getElementById("f2").innerHTML="f2= " + f2(x)
}