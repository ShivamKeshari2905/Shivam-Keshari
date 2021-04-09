function Random(){
    x = (Math.floor(Math.random() * 2) == 0)
    if(x)
        document.getElementById('random').innerHTML = "Have a Good Day!"
    else
        document.getElementById('random').innerHTML = "Have a Bad Day!"
}