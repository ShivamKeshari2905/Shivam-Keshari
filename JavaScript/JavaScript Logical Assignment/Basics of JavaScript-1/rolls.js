console.log("RollsToGetSix")
function rollDice(){
    return 1 + Math.floor(Math.random() * 6)
}

function numRollstoGetSix(){
    countSix = 0
    while(true){
        countSix ++
        if(rollDice() == 6)
            break
    }
    return countSix
}

console.log(numRollstoGetSix())
console.log(numRollstoGetSix())