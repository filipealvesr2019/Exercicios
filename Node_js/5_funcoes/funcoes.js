function presente (dinheiro, valor) {
    if (dinheiro < valor){
        return 'nao vai dar para comprar...'
    }else{
        return 'voçe realmente precisa dessa compra'
    }
}

let x = presente(100, 90)
console.log(x)