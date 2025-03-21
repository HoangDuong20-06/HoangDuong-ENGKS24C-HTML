let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let txt = document.getElementById("text");
let count = 20;
plus.onclick = function(){
    count += 1;
    txt.style.fontSize = count + "px";
}
minus.onclick = function(){
    count -= 1;
    txt.style.fontSize = count + "px";
}
