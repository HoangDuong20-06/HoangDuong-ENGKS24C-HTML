let button = document.getElementById("button");
let modal = document.getElementById("modalEdit");
let body = document.getElementById("container");
let xButton = document.getElementById("closeButton")
button.onclick = function () {
    modal.style.display= "block"
    body.style.backgroundColor="#999999"
}
xButton.onclick = function () {
    modal.style.display= "none"
    body.style.backgroundColor="white"
}