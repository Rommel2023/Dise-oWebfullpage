

// seleccione un elemento del DOM con la clase CSS "animacion2" y lo almacena en la variable anima
let anima = document.querySelector(".animacion2");
// carga la animacion utilizando la funcion loadAnimation de la biblioteca Bodymovin
let animation = bodymovin.loadAnimation({
    container: anima,
    path: "https://lottie.host/eef4c7b7-914e-42e2-951f-08844cb80cde/20VZqVoDYZ.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
    name: "barber",
});
// En la funcion click se llama el metodo playSegments() en la animacion
// este metodo reproduce la animacion desde el fotograma 0 hasta el fotograma 150, y el segundo argumento (true) indica si la 
// animaion debe reproducirse en bucle.
anima.addEventListener("click", function () {
    animation.playSegments([60, 150], true);
});

//Elasticidad botones menu
$(document).ready(function () {
    smoothScroll.init({
        selector: '[data-scroll]',
        //selector: 'a.nav-link', 
        // 2 seg equivale a 2000)  
        speed: 300,
        //aceleraciones
        easing: 'easeInQuart',
        //easing: 'easyInCubic'
        //easing: 'easyInOutQuad',
        //easing:'easeInQuart',
        //easing: 'easeInOutCubic',
    });

});


//desaparece el boton ScrollTop al cargar la pagina web
document.getElementById("flechabtn").style.display = "none";

//esconder botón ScrollTop (parte superior)
window.onscroll = function () {
    scrollFunction()
};

//funcion scroll
function scrollFunction() {
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        document.getElementById("flechabtn").style.display = "block";
    } else {
        document.getElementById("flechabtn").style.display = "none";
    }
}




//Funcián Scrolltop (Jquery)
function topFunction() {
    $('a.scroll-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 });
    });
}