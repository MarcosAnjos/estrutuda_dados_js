var avgTemp = []

avgTemp[0] = 31.9
avgTemp[1] = 35.3
avgTemp[2] = 42
avgTemp[3] = 38
avgTemp[4] = 25.5

console.log(avgTemp[0])

var daysOfWeek = ['Sunday', 'Tuesday', 'Wednsday', 'Thusday', 'Friday', 'Saturday']

for (var i = 0; i < daysOfWeek.length; i++){
    console.log(daysOfWeek[i])
}

var fibo = []
fibo[0] = 0
fibo[1] = 1
fibo[2] = 2

for (var i = 3; i < 20; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2]
}

console.log(fibo)

for (var i = 4; i < fibo.length ; i++){
    console.log(fibo[i])
}

// INSERINDO ELEMEMENTOS

var num = [1,2,3,4,5,6,7,8,9]

// num[10] = 10
num[num.length] = 11

console.log(num)

num.push(12)
num.push(13)
num.push(14)

console.log(num)

num.unshift(-1)
num.unshift(-2)

console.log(num)

num[0] = -40

console.log(num)

// REMOVENDO ARRAY

num.pop()
num.pop()
console.log(num)

num.shift()
num.shift()
console.log(num)

// INSERINDO NUMA POSICAO ESPECIFICA

console.log('-----------------------')

console.log(num)
num.splice(3,3)
console.log(num)
num.splice(3,0,4,5,6)
console.log(num)

console.log('-----------------------')


// ARRAY 2 DIMENSAO

var avgTempWeek = []

var avgTempWeek1 = [33,25.2,19,27,23.4,25,42]
var avgTempWeek2 = [41,29,33,21.2,19.5,17,33.8]

avgTempWeek[0] = avgTempWeek1
avgTempWeek[1] = avgTempWeek2

console.log(avgTempWeek[1][2])

// ARRAY 3 DIMENSAO

var month = []

var firstWeeks = []
var lastWeeks = []

var avgTempWeek1 = [33,25.2,19,27,23.4,25,42]
var avgTempWeek2 = [41,29,33,21.2,19.5,17,33.8]
var avgTempWeek3 = [13,20.2,15,7,29,25,42]
var avgTempWeek4 = [41,2,33,21.2,9.5,1,31.8]

firstWeeks = [avgTempWeek1, avgTempWeek2]
lastWeeks = [avgTempWeek3, avgTempWeek4]

month = [firstWeeks, lastWeeks]

console.log('aqui')

for (var i = 0; i < month.length; i++){
    for (var x = 0;x < month[i].length; x++ ){
        for (var y = 0; y < month[i][x].length; y++){
            console.log(month[i][x][y])
        }
    }
}