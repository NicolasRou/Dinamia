window.onscroll = function(){
    AddOrRemove()
};

let Nav = document.getElementById("inicio");
let NavPosition = Nav.offsetTop;

function AddOrRemove(){
    if(window.pageYOffset >= 650){
        Nav.classList.add("fixed");
    }
    else{
        Nav.classList.remove("fixed");
      
}}

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

