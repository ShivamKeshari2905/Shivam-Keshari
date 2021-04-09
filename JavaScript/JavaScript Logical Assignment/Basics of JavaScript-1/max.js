function maxNum() {
    var num1,num2,num3;
    num1=Number(document.getElementById("no_input1").value);
    num2=Number(document.getElementById("no_input2").value);
    num3=Number(document.getElementById("no_input3").value);
    var max = 0;
    if((num1 >= num2) && (num1 >= num3)){
        max = num1;
    }
    else if((num2 >= num1) && (num2 >= num3)){
        max = num2;
    }
    else{
        max = num3;
    }
alert(max);
}