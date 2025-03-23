let button = document.getElementById("button");
button.onclick = function(){
    let counts = document.getElementById("count");
    let texts = document.getElementById("txt").value;
    counts.innerText = texts.length ;
}