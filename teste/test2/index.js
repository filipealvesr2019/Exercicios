const img = document.getElementById("image")
let toggle = true;
img.addEventListener('click', function(){
    toggle = !toggle;
    if(toggle){
        img.src = 'img/imageA.svg'
    }else{
         img.src = 'img/imageB.svg'
    }
    //img.src = 'img/imageB.svg';
})