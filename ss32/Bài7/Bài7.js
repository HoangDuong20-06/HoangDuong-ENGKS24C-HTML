let crocodie = document.getElementById("crocodie");
let rabbit = document.getElementById("rabbit");
let snake = document.getElementById("snake");
let body = document.getElementById("container");
let main = document.getElementById("normal");
let image = document.getElementById("main")
crocodie.onclick = function(){
    image.src = crocodie.src;
    main.style.display = "flex";
}
rabbit.onclick = function(){
    image.src = rabbit.src;
    main.style.display = "flex";
}
snake.onclick = function(){
    image.src = snake.src;
    main.style.display = "flex";
}
main.onclick = function(){
    main.style.display = "none"
}