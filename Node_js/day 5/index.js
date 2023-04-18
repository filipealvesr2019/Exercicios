const setaDireita = document.querySelector("#seta-direita")
const setaEsquerda = document.querySelector("#seta-esquerda")
let slideDireita = document.querySelector("#direita")

function ToggleSlide(){
    let img = document.querySelector("#direita")

    if(img.indexOf('img/image1.png') != -1)
    {
        document.getElementById("title").innerHTML = "Honda CB 500X"
        
        document.getElementById('direita').src = 'img/image2.png'
    }else{

        document.getElementById("title").innerHTML = "Scooter Elétrica Voltz EV1"
        
        document.getElementById('direita').src = 'img/image1.png'
    }
}
setInterval(ToggleSlide,40000)


setaDireita.addEventListener('click', ToggleSlide)
setaEsquerda.addEventListener('click', ToggleSlide)


let imgA = document.getElementById('direita').src
console.log(imgA.indexOf('img/image1.png'))



