// let jogador = {
// nome: 'Neymar',
// posicao: 'Atacante',
// numgols: 400
//}


const jogador = function(nome, posicao, numGols){
    Nome = nome,
    Posicao = posicao,
    Gols = numGols

    this.getNome = function(){
        return nome
    }

    this.getPosicao = function(){
        return Posicao
    }

    this.getGols = function(){
        return Gols
    }
}


const Neymar = new jogador("Neymar", "Atacante", 400)
console.log(Neymar.getNome())

const Renato = new jogador ("Renato Augusto", "Meio Campista", 80)
console.log(Renato.getNome())