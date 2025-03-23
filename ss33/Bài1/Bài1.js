let show = document.getElementById("show");
let hide = document.getElementById("hide");
let pass = document.getElementById("pass");
hide.style.display = "none";
show.onclick = function(){
    show.style.display = "none";
    hide.style.display = "block";
    pass.type = "text";
}
hide.onclick = function(){
    show.style.display = "block";
    hide.style.display = "none";
    pass.type = "password";
}