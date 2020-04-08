function Stack(){
    var items = []

    this.push = function(element){
        // add novo elemento a pilha
        items.push(element)
    }

    this.pop = function(){
        // remobe topo da pinha 
        return items.pop()
    }

    this.peek = function(){
        // devolve o elemento que est[a no topo da pilha
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
//var pilha = new Stack()

//inserindo elementos
//console.log('Pilha Criada')
//console.log(pilha.isEmpty())

//console.log('Inserindo Elementos')
//pilha.push(5)
//pilha.print()
//pilha.push(8)
//pilha.print()
//pilha.push(11)
//pilha.print()
//pilha.push(15)
//pilha.print()

//console.log('Removendo Elementos')
//pilha.print()
//pilha.pop()
//pilha.print()
//pilha.pop()
//pilha.print()
//pilha.pop()
//pilha.print()
//pilha.pop()
//pilha.print()

//console.log('Pilha Varia? ')
//console.log(pilha.isEmpty())


