let jogador = {
    nome: 'Renato Augusto',
    idade: 34,
    numGols: 81,
    gol(g = 0){
        console.log('Renato fez gol!')
        this.numGols += g
    }

}

//console.log(jogador.nome)
//console.log(jogador.numGols)
//jogador.gol()
//console.log(jogador.numGols)

jogador.posicao = 'Meio campo'
console.log(jogador)

delete jogador.idade
console.log(jogador)