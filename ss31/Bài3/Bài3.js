let reds = document.getElementById("red");
let greens = document.getElementById("green");
let purples = document.getElementById("purple");
let bodys = document.getElementById("container");
reds.onclick = function(){
    bodys.style.background="red";
}
greens.onclick = function(){
    bodys.style.background="green";
}
purples.onclick = function(){
    bodys.style.background="violet";
}