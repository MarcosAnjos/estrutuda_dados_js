// media de temperatura
var avgTemp = []

avgTemp[0] = 31.9
avgTemp[1] = 35.3
avgTemp[2] = 42
avgTemp[3] = 38
avgTemp[4] = 25
avgTemp[5] = 9

console.log("Acessando posicao do primeiro elemento")
console.log(avgTemp[0])

console.log("Add novo elemento final do array = 36")
avgTemp.push(36)
console.log(avgTemp)

console.log("Add novo elemento no inicio do array = -1")
avgTemp.unshift(-1)
console.log(avgTemp)

console.log("Removendo novo elemento final do array = 36")
avgTemp.pop()
console.log(avgTemp)

console.log("Removendo novo elemento no inicio do array = -1")
avgTemp.shift(-1)
console.log(avgTemp)


console.log("-------------------------------")
console.log("---Array bidimencionais---")

var avgTempWeek = []

// semanas 7 dias por semana
var avgTemp1 = [33,23,26,23,5,7,12.6]
var avgTemp2 = [23.2,21,16,33,15,10,13.9]
var avgTemp3 = [13,12,16,33,15,17,12.6]
var avgTemp4 = [33,16,21,5,17,22.6,19]

avgTempWeek[0] = avgTemp1
avgTempWeek[1] = avgTemp2


console.log("matriz bidimencional")
console.log(avgTempWeek)

console.log("Posicao[0][0]")
console.log(avgTempWeek[0][0])
console.log("Posicao[1][0]")
console.log(avgTempWeek[1][0])

for(var i=0; i < avgTempWeek.length; i++){
    for(var j=0; j < avgTempWeek[i].length; j++){
        console.log(avgTempWeek[i][j])
    }
}

console.log("-------------------------------")
console.log("---Array Trdimencionais---")

// 
var month = []
var firstWeeks = []
var lastWeeks = []

firstWeeks = [avgTemp1, avgTemp2]
lastWeeks = [avgTemp3, avgTemp4]

month = [firstWeeks, lastWeeks]

console.log(month[1][1][4])

for(var x=0 ; x < month.length; x++){
    for(var y=0; y< month[x].length; y++){
        for(var z=0; z < month[x][y].length; z++){
            console.log([x][y][z])
        }
    }
}