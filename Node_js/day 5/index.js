function direita(direita){
    document.getElementById("direita").style.visibility = "visible";

}

function esquerda(esquerda){
    document.getElementById("esquerda").style.visibility = "visible";
}

/*function addE(cardI){
    
    var Element = document.querySelector(cardI);
    Element.classList.toggle("direita");
}

function addEL(cardID){
    var Element = document.querySelector(cardID);
    Element.classList.toggle("esquerda");
}

function checkKeyBoardCode()
{
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var name = event.code;

        alert(`tecla pressionada ${name} \r\n valor do keycode: ${code}`);
    }, false);
}
function addKeyBoardEventListener(){

    document.addEventListener('keydown', (event) => {
        var imagem1 = getElementById("imagem");
        var imagem2 = getElementById("image")

        var code = event.code;
        if(code == 'digite1'){
            imagem1.classList.toggle('direita').style.visibility = "visible";
            imagem2.classList.remove('esquerda').style.visibility = "hidden";
        }
        if(code == 'digite2'){
            imagem1.classList.toggle('direita').style.visibility = "visible";
            imagem2.classList.remove('esquerda').style.visibility = "hidden";
        }
    },false);
}

addKeyBoardEventListener();*/