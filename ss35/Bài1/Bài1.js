let mission = JSON.parse(localStorage.getItem("mission")) || [];
let add = document.getElementById("buttonAdd");
function renderMission() {
    let listMission = document.getElementById("mission");
    listMission.innerHTML = "";
    mission.forEach(function (item) {
        listMission.innerHTML += `<li class="task">${item.task} 
            <div>
        <button onclick="deleteTodo(${item.id})">Xoá</button>
            <button onclick="updateTodo(${item.id})">Sửa</button>
            </div>
        </li>`;
    });
    saveStorage();
}
add.onclick = function () {
    addMission();
};
function addMission() {
    let inputElement = document.getElementById("input");
    let inputValue = inputElement.value;
    if (inputValue === "") {
        alert("Vui lòng nhập nội dung!");
        return;
    }
    let id;
    if (mission.length > 0) {
        id = mission[mission.length - 1].id + 1;
    } else {
        id = 1;
    }
    let todo = {
        id: id,
        task: inputValue
    };
    mission.push(todo);
    inputElement.value = ""; 
    renderMission();
}
function deleteTodo(id) {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa công việc này không?");
    if (confirmDelete) {
        mission = mission.filter(function(task) {
            return task.id !== id;
        });
        renderMission();
    }
}

function updateTodo(id) {
    let taskIndex = mission.findIndex(function(task) {
        return task.id === id;
    });
    if (taskIndex !== -1) {
        let newTask = prompt("Nhập nội dung mới:", mission[taskIndex].task);
        if (newTask !== null && newTask!== "") {
            mission[taskIndex].task = newTask;
            renderMission();
        }
    }
}
renderMission();
function saveStorage(){
    localStorage.setItem("list",JSON.stringify(mission));
}
