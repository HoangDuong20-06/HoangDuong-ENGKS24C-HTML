let darks = document.getElementById("dark")
let divs = document.getElementById("divb")
darks.onclick = function(){
    if(divs.style.backgroundColor=="white"){
        divs.style.backgroundColor = "black";
        divs.style.color = "white";
    }else{
        divs.style.backgroundColor="white";
        divs.style.color = "black";
    }
}