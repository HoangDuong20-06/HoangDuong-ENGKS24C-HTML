let red = document.getElementById("red");
let blue = document.getElementById("blue");
let purple = document.getElementById("purple");
let yellow = document.getElementById("yellow");
let body = document.getElementById("container");
red.onclick = function(){
    saveColor("#e74c3c");
}
blue.onclick = function(){
    saveColor("#3498db");
}
purple.onclick = function(){
    saveColor("#9b59b6");
}
yellow.onclick = function(){
    saveColor("#f1c40f");
}
function saveColor(color){
    body.style.background = color;
    localStorage.setItem("color",color);
}
let savedcolo = localStorage.getItem("color");
if (savedcolo) {
    body.style.background=savedcolo;
}