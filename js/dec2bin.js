function dec2bin(decNumber){ // 23
    var restStack = [],
    rest, 
    binaryString = ''

    while(dec2bin > 0){ // 23
        rest = Math.floor(decNumber % 2) // 1-1-1-0-1
        restStack.push(rest) // [1][1][1][0][1]
        decNumber = Math.floor(decNumber / 2)// 23/2 = 11 - 5/2 = 5 - 2
    }

    while(restStack.length > 0){
        binaryString += restStack.pop().toString()//10111
    }

    return binaryString
}


console.log(dec2bin(25))