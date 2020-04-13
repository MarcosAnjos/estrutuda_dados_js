function Stack(){
    var items = []

    this.push = function(element){
        // add novo elemento a pilha
        items.push(element)
    }

    this.push2 = function(x, y){
        var tam = pilha.size()
        return items.splice(tam,0,x,y) // splice(indice, numero de elementos, elemento a, elemento b)

    }

    this.pop = function(){
        // remobe topo da pinha 
        return items.pop()
    }

    this.pop2 = function() {
        //pop2 desempilha dois elementos da pilha
        var tam = pilha.size()
        if (tam < 2 ){
            return items.pop()
        } else {
            tam -= 2
            return items.splice(tam) // Todos os elementos apartir do indice tam v'ao ser excluidos
        }
    }

    this.maior = function() {

        return  Math.max.apply(Math,items)
    }

    this.menor = function() {

        return Math.min.apply(Math, items)
    }
    
    this.media = function() {
        
        return items.reduce((anterior, numero) => anterior + numero, 0)

         
    }

    this.posicao = function(posicao) {

        return items.indexOf(posicao)
    }

    this.copiaPilha = function() {
        
        return items.slice(0, items.length)
    }

    this.peek = function(){
        // devolve o elemento que esta no topo da pilha
        return items[items.length - 1]
    }

    this.isEmpty = function(){
        // infomar se a pilha esta vazia ou nao
        return items.length == 0
    }
    this.clear = function(){
        // limpar a pilha
        items = []
    }
    this.size = function(){
        // informar o tamanho da pilha
        return items.length
    }
    this.print = function(){
        // imprime pilha no console
        console.log(items.toString())
    }

}
// estanciando a minha classe
var pilha = new Stack()

//inserindo elementos
console.log('Pilha Criada')
console.log(pilha.isEmpty())

console.log('\nInserindo Elementos')
pilha.push(5)
pilha.print()
pilha.push(8)
pilha.print()
pilha.push(11)
pilha.print()
pilha.push(15)
pilha.print()
pilha.push(20)
pilha.print()
pilha.push(99)
pilha.print()

pilha.push2(100,200)
pilha.print()
console.log('\nRemovendo Elementos')
pilha.print()
console.log("[pop2]")
pilha.pop2()
pilha.print()
console.log("[pop]")
pilha.pop()
pilha.print()
console.log("[pop]")
pilha.pop(2)
pilha.print()
//pilha.pop()
//pilha.print()

console.log('\nNumero de elementos pilha')
console.log(pilha.size())

console.log('\nTopo da pilha')
console.log(pilha.peek())

console.log('\nCopia pilha')
console.log(pilha.copiaPilha())

console.log('\nMaior')
console.log(pilha.maior())
console.log('\nMenor')
console.log(pilha.menor())

console.log('\nPosicao do valor = 11')
pilha.print()
console.log(pilha.posicao(11))

console.log('\nMedia')
pilha.media()

console.log('\nPilha Vazia?')
console.log(pilha.isEmpty())


