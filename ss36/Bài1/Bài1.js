let save = document.getElementById("saveButton");
let change = document.getElementById("changeButton");
let menu2 = document.getElementById("menu2");
let menu1 = document.getElementById("menu1");
let inputName = document.getElementById("name");
let user = document.getElementById("user");
menu2.style.display = "none";
save.onclick = function(){
    let nameValue = inputName.value;
    menu2.style.display = "block";
    menu1.style.display = "none"
    HelloUser(nameValue)    
    localStorage.setItem("Name",JSON.stringify(nameValue));
}
change.onclick = function(){
    menu2.style.display = "none";
    menu1.style.display = "block";
    localStorage.removeItem("Name");
}
function HelloUser(name){
    user.innerHTML = `👋 Chào bạn, ${name}!`
}
let savedName = localStorage.getItem("Name");
if (savedName) {
    savedName = JSON.parse(savedName);
    HelloUser(savedName); 
    menu1.style.display = "none";
    menu2.style.display = "block";
} else {
    menu2.style.display = "none";
}