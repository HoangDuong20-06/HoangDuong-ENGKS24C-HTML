let count = 0;
let buttons = document.getElementById("button");
let counts = document.getElementById("count");
buttons.onclick = function(){
    count++;
    counts.textContent = count;
}