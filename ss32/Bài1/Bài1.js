let randomRGB = () => {
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
newColor =  r * 0.299 + g * 0.587 + b * 0.114
return `rgb(${r}, ${g}, ${b})`;
}
let button = document.getElementById("button");
let box = document.getElementById("container");
button.onclick = function(){
    box.style.backgroundColor = randomRGB();
}