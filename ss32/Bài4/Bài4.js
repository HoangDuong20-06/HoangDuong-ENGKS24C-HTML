let button = document.getElementById("button");
let correct = document.getElementById("true");
let inCorrect = document.getElementById("false");
button.onclick = function() {
    let email = document.getElementById("text").value;
    correct.style.display = " none "
    inCorrect.style.display = " none"
    if (email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"))) {
        correct.style.display = " flex "
    }else{
        inCorrect.style.display = " flex "
    }
}