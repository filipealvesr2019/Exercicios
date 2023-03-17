class jogador {
    constructor(nome, posicao,numgols){
        this.nome  = nome
        this.posicao = posicao
        this.numgols = numgols
    }

    golsMarcados(){
        console.log(`O ${this.nome} já marcou ${this.numgols} gols em sua carreira`)
    }
}

const Neymar = new jogador('Neymar', 'Atacante', 400)
Neymar.golsMarcados()
const Pele = new jogador('Pelé', 'Atacante', 1000)
Pele.golsMarcados()

console.log(typeof jogador)