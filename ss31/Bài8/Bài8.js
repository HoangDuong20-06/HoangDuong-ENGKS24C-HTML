let toDoList = [
    {
        id: 1,
        task: 'Hit the gym',
        completed: false,
    },
    {
        id: 2,
        task: 'Pay bills',
        completed: true,
    },
    {
        id: 3,
        task: 'Meet george',
        completed: false,
    },
    {
        id: 4,
        task: 'Buy eggs',
        completed: false,
    },
    {
        id: 5,
        task: 'Read a book',
        completed: false,
    },
    {
        id: 6,
        task: 'Organize office',
        completed: false,
    }
];
const ul = document.getElementById("myUL");
function renderTodo(){
    let listTodo = document.getElementById("myUL");
    listTodo.innerHTML="";
    toDoList.forEach(function(item){
        if(item.completed === false){
            listTodo.innerHTML += `<li>${item.task}<span class="close">×</span></li>`
        }else{
            listTodo.innerHTML += `<li class="checked">${item.task}<span class="close">×</span></li>`
        }
    });
}
renderTodo();
let button  = document.getElementById("addBtn");
button.onclick = function(){
    addTodo();
}
function addTodo(){
    let input = document.getElementById("myInput").value;
let id = toDoList[toDoList.length - 1].id+1;
let todo = {
    id: id,
    task: input,
    completed:false,
};
toDoList.push(todo);
renderTodo();
}
