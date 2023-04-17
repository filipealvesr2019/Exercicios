function direita(image1){
    document.getElementById("image1");
}

function esquerda(image){
    document.getElementById("image");
}

function addE(cardI){
    var esquerda = document.getElementById("image1");
    var Element = document.querySelector(cardI);
    Element.classList.toggle("direita")
}

function addEL(cardID){
    var esquerda = document.getElementById("image");
    var Element = document.querySelector(cardID);
    Element.classList.toggle("esquerda")
}

function checkKeyBoardCode()
{
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var name = event.code;

        alert(`tecla pressionada ${name} \r\n valor do keycode: ${code}`);
    }, false);
}
function addChange(){
    document.addChange('keydown', (event) => {
        var imagem1 = getElementById("image1");
        var imagem2 = getElementById("image")

        var code = event.code;
        if(code == 'digite1'){
            imagem1.classList.toggle('a').style.visibility = "invisible";
            imagem2.classList.remove('b').style.visibility = "visible";
        }
        if(code == 'digite2'){
            imagem1.classList.toggle('a').style.visibility = "visible";
            imagem2.classList.toggle('b').style.visibility = "visible";
        }
    },false);
    console.log(addChange());
}

checkKeyBoardCode();
console.log(checkKeyBoardCode());