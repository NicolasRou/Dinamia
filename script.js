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

// --- MENU HAMBURGUESA

