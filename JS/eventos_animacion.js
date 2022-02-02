const botonmenu = document.getElementById("botonmenu");
const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");


window.addEventListener("scroll",function(){
    var nav = this.document.querySelector(".nav");
    nav.classList.toggle("background",window.scrollY>0);
});
window.addEventListener("scroll",function(){
    var nombre = this.document.querySelector("h1");
    nombre.classList.toggle("background",window.scrollY>0);
});
window.addEventListener("scroll",function(){
    var navbar = this.document.querySelector(".navbar");
    navbar.classList.toggle("background",window.scrollY>0);
});
botonmenu.addEventListener("click",function(){
    menu.classList.add("opacidad");
    const div =   document.createElement("div.aaa");
    div.classList.add("overlay-menu");

});
cross.addEventListener("click",function(){
    menu.classList.remove("opacidad");
})
let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
muestraSlides(indice+=n);

}
function posicionSlide(n){
muestraSlides(indice = n);
}
setInterval(function tiempo(){
muestraSlides(indice+=1)
},7000);
function muestraSlides(n){
    let i;

    let slides = document.getElementsByClassName("miSlider");
    let barras = document.getElementsByClassName("barra");

    if(n >slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length();
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active'; 

}




const producto = document.getElementById("click-producto");
const overlay = document.getElementById("overlay");
const ventana = document.getElementById("ventana");
const cerrar = document.getElementById("cerrar");
producto.addEventListener("click",function(){
    overlay.classList.add("emergente");
});
cerrar.addEventListener("click",function(){
overlay.classList.remove("emergente");
})

const producto_1 = document.getElementById("click-producto-1");
const overlay_1 = document.getElementById("overlay-1");
const ventana_1 = document.getElementById("ventana-1");
const cerrar_1 = document.getElementById("cerrar_1");


producto_1 . addEventListener("click",function(){
overlay_1.classList.add("emergente");
});
cerrar_1.addEventListener("click",function(){
    overlay_1.classList.remove("emergente");
    })



const producto_2 = document.getElementById("click-producto-2");
const overlay_2 = document.getElementById("overlay-2");
const ventana_2 = document.getElementById("ventana-2");
const cerrar_2 = document.getElementById("cerrar-2");
producto_2.addEventListener("click",function(){
    overlay_2.classList.add("emergente");
});
cerrar_2.addEventListener("click",function(){
overlay_2.classList.remove("emergente");
});

const producto_3 = document.getElementById("click-producto-3");
const overlay_3 = document.getElementById("overlay-3");
const ventana_3 = document.getElementById("ventana-3");
const cerrar_3 = document.getElementById("cerrar-3");

producto_3.addEventListener("click",function(){
   overlay_3.classList.add("emergente"); 
});
cerrar_3.addEventListener("click",function(){
overlay_3.classList.remove("emergente");
});

    

const cerrar_video = document.getElementById("cerrar_video");
const fondo_transparencia = document.querySelector(".fondo-transparencia");

const click_scar = document.querySelector(".click-scar");

click_scar.addEventListener("click",function(){
    fondo_transparencia.classList.add("aparicion");

});
cerrar_video.addEventListener("click",function(){

        fondo_transparencia.classList.remove("aparicion");

});