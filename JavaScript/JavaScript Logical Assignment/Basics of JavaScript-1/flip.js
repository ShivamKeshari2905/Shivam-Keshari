console.log("flip");
function flipCoin(num){
    countH = 0, countT = 0
    for(i = 0;i < 10;i ++)
    {
        x = (Math.floor(Math.random() * 2) == 0);
        if(x)
            countH ++
        else
            countT ++
    }
    return countH
}
console.log(flipCoin(10))
console.log(flipCoin(10))
console.log(flipCoin(10))

console.log("flip fraction")
console.log(flipCoin(10)/10)
console.log(flipCoin(10)/10)
console.log(flipCoin(10)/10)