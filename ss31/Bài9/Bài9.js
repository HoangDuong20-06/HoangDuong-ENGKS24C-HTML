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
            listTodo.innerHTML += `<li>${item.task}<span class="close" onclick ="deleteTodo(${item.id})">×</span></li>`
        }else{
            listTodo.innerHTML += `<li class="checked">${item.task}<span class="close" onclick ="deleteTodo(${item.id})">×</span></li>`
        }
    });
}
renderTodo();
function deleteTodo(id){
    toDoList = toDoList.filter((task) => task.id !== id);
    renderTodo();
}
renderTodo();