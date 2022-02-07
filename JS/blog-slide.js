let nuevoindice = 1;
muestraSlides1(nuevoindice);

function avanzaSlide1(x){
muestraSlides1(nuevoindice+=x);
}
function posicionSlide1(x){
muestraSlides1(nuevoindice = x);
}
setInterval(function tiempo(){
muestraSlides1(nuevoindice+=1)
},7000);
function muestraSlides1(x){
    let i;
    let nuevoslides = document.getElementsByClassName("miSlider-secundario");
    let nuevobarras = document.getElementsByClassName("barrita");

    if(x >nuevoslides.length){
        nuevoindice = 1;
    }
    if(x < 1){
        nuevoindice = nuevoslides.length();
    }
    for(i = 0; i < nuevoslides.length; i++){
        nuevoslides[i].style.display = 'none';
    }
    for(i = 0; i < nuevobarras.length; i++){
        nuevobarras[i].className = nuevobarras[i].className.replace(" active2", "");
    }

    nuevoslides[nuevoindice-1].style.display = 'block';
    nuevobarras[nuevoindice-1].className += ' active2'; 

}